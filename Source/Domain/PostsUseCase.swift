import Foundation

protocol PostsUseCase {
    func request( _ request: PostEvents.Request, response: @escaping (PostEvents.Response) -> Void)
}
