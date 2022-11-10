import Foundation
struct LoginUseCaseHandler: LoginUseCase {
    private let loginHandler = DatabaseHandler.shared
    func request(_ request: LoginEvent.Request, response: @escaping (LoginEvent.Response) -> Void) {
        switch request {
            case .login(let username, let password):
                let result = loginHandler.login(with: username, pasword: password)
                response(.loginResponse(isLoggedIn: result))
        }
    }
}
struct DatabaseHandler {
    
    static let shared = DatabaseHandler()
    private init() {}
    
    private var defaults = UserDefaults.standard
    
    func checkIfLoggedIn() -> Bool {
        return defaults.bool(forKey: Default.Constants.isLoggedIn)
    }
    
    func setUserLoggedIn() {
        defaults.setValue(true, forKey: Default.Constants.isLoggedIn)
    }
    
    func login( with username: String, pasword: String) -> Bool {
        let saved_username = defaults.string(forKey: Default.Constants.username)
        let saved_password = defaults.string(forKey: Default.Constants.password)
        if username == saved_username && pasword == saved_password {
            defaults.set(true, forKey: Default.Constants.isLoggedIn)
            return true
        }
        return false
    }
    
    func register( with username: String, pasword: String) -> Bool {
        defaults.setValue(username, forKey: Default.Constants.username)
        defaults.setValue(pasword, forKey: Default.Constants.password)
        return true
    }
    
    func help(with username: String) -> Bool {
        let saved_username = defaults.string(forKey: Default.Constants.username)
        return saved_username == username
    }
}

struct Default {
    struct Constants {
        static let isLoggedIn = "isLoggedIn"
        static let username = "username"
        static let password = "password"
    }
}

