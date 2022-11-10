
import SwiftUI

struct LoginView: View {
    @State var username = ""
    @State var password = ""
    @ObservedObject var viewModel = LoginViewModel()
    
    var body: some View {
        NavigationView {
            VStack {
                Spacer()
                    .frame(height: 100)
                Image(systemName: "bell.circle.fill")
                    .resizable()
                    .frame(width: 64, height: 64)
                InputField(placeholder: "Username", text: $username)
                InputField(placeholder: "Password", text: $password)
                
                PrimaryButton(title: "Sign in") {
                    viewModel.perform(.login(username: username, password: password))
                }
                HStack {
                    SecondaryButton(title: "Register") {
                        viewModel.login.showRegiterView = true
                    }

                    SecondaryButton(title: "Need help") {
                        viewModel.login.showHelpView = true
                    }
                }
                .padding(.top, 16)
                Spacer()
               
                NavigationLink("", isActive: $viewModel.login.showRegiterView) {
                    RegiterView()
                }
                
                NavigationLink("", isActive: $viewModel.login.showHelpView) {
                    LoginHelpView()
                }
            }
            .padding(.horizontal)
        }
        .navigationBarHidden(true)
        .navigationViewStyle(.stack)

    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
