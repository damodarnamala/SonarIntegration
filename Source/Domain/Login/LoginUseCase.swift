import Foundation
protocol LoginUseCase {
    func request( _ request: LoginEvent.Request, response: @escaping (LoginEvent.Response) -> Void)
}


struct User {
    var name: String
    var age: Int
    var isMarried = false
    var isIndian = true
}

func checkIsEligigibleForMarriage(_ user: User) -> Bool {
    if user.isIndian && user.age > 21 {
        return true
    }
    
    if user.isIndian && user.age > 21 {
        return true
    }
    if user.isIndian && user.isMarried == false && user.age > 21 {
        return true
    }
    return false
}
