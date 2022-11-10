import SwiftUI

@main
struct CleanSecondApp: App {
    var body: some Scene {
        WindowGroup {
            if DatabaseHandler.shared.checkIfLoggedIn() {
                PostView()
            } else {
                LoginView()
            }
        }
    }
}
