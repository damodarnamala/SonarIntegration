
import Foundation

class LoginEvent {
    enum Request {
        case login(username: String, password: String)
    }
    enum Response {
        case loginResponse(isLoggedIn:Bool)
    }
}
