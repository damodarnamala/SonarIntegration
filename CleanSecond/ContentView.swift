//
//  ContentView.swift
//  CleanSecond
//
//  Created by Damodar Namala on 07/11/22.
//

import SwiftUI

struct ContentView: View {
    @ObservedObject var viewModel = PostViewModel()
    
    var body: some View {
        VStack {
            if viewModel.state.isLoading == true {
                Text("Loading..")
            } else {
                List {
                    ForEach(viewModel.state.users, id:\.self) { user in
                        Text(user)
                    }
                }
            }
        }.onAppear {
            ///
            /// Fething users on view loaded
            ///
            viewModel.fetchUsers()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
