import Foundation
import Combine

class PostViewModel: ObservableObject {
    @Published private (set) var viewState: PostsState
    private var useCase: PostsUseCase
    
    init(useCase: PostsUseCase = PostUseCaseHandler()) {
        viewState = .init(isLoading: false, posts: [])
        self.useCase = useCase
    }
    
    func fetchPosts() {
        self.viewState.isLoading = true
        self.useCase.request(.fetchAll) { response in
            self.viewState.isLoading = false
            switch response {
                case .posts(let posts):
                    self.viewState.posts = posts
            }
        }
    }
}
