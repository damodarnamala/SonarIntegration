import Foundation

struct PostUseCaseHandler: PostsUseCase {
    
    var local: PostDataSource
    var remote: PostDataSource
    
    var internetProvider: InternetProvider
    
    init(local: PostDataSource =  Local(), remote: PostDataSource = Remote()) {
        self.local = local
        self.remote = remote
        self.internetProvider = .init()
    }
    
    func request(_ request: PostEvents.Request, response: @escaping (PostEvents.Response) -> Void) {
        switch request {
            case .fetchAll:
                if internetProvider.isOnline {
                    response(.posts(remote.fetchPosts()))
                } else {
                    response(.posts(local.fetchPosts()))
                }
        }
    }
}

protocol PostDataSource {
    func fetchPosts() -> [String]
}

extension PostUseCaseHandler {
    struct Remote: PostDataSource {
        func fetchPosts() -> [String] {
            ["India", "USA", "UK"]
        }
    }
    
    struct Local: PostDataSource {
        func fetchPosts() -> [String] {
            ["India"]
        }
    }
}

struct InternetProvider {
    var isOnline = true
}



struct PostMockUseCaseHandler: PostsUseCase {
    var isInterNetAvailable: Bool
   
    init(isInterNetAvailable: Bool = false) {
        self.isInterNetAvailable = isInterNetAvailable
    }
    
    func request(_ request: PostEvents.Request,
                 response: @escaping (PostEvents.Response) -> Void) {
        if isInterNetAvailable {
            response(.posts(["1"]))
        } else {
            response(.posts(["2"]))
        }
    }
}
