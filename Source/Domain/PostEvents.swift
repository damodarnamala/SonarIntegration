import Foundation

class PostEvents {
    enum Request {
        case fetchAll
    }

    enum Response {
        case posts(_ posts: [String])
    }
}
