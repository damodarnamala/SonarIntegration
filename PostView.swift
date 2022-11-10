import SwiftUI

struct PostView: View {
    @ObservedObject var viewModel = PostViewModel()
    
    var body: some View {
        VStack {
            if viewModel.viewState.isLoading == true {
                Text("Loading..")
            } else {
                List {
                    ForEach(viewModel.viewState.posts, id:\.self) { post in
                        Text(post)
                    }
                }
            }
        }.onAppear {
            ///
            /// Fething users on view loaded
            ///
            viewModel.fetchPosts()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        PostView()
    }
}
