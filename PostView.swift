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
            viewModel.fetchPosts()
            let isEligible = checkIsEligigibleForMarriage(User(name: "John", age: 34, isMarried: false, isIndian: true))
            print(isEligible)

        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        PostView()
    }
}
