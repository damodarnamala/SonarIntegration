import Foundation
import Combine

class PostViewModel: ObservableObject {
    @Published private (set) var state: UserState
    private var useCase: UsersUseCase
    init() {
        state = .init(isLoading: false, users: [])
        self.useCase = UserUseCaseHandler()
    }
    func fetchUsers() {
        self.state.isLoading = true
        self.useCase.request(.fetchAllUsers) { response in
            DispatchQueue.main.asyncAfter(deadline: .now() + 5) {
                self.state.isLoading = false
                switch response {
                    case .users(let users):
                        self.state.users = users
                }
            }
        }
    }
}


