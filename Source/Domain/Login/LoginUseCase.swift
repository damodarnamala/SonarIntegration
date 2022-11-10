import Foundation
protocol LoginUseCase {
    func request( _ request: LoginEvent.Request, response: @escaping (LoginEvent.Response) -> Void)
}
