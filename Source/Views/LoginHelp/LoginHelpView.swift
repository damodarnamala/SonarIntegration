
import SwiftUI

struct LoginHelpView: View {
    @State var username = ""
    @State var password = ""

    var body: some View {
        VStack {
            Spacer()
                .frame(height: 84)
            InputField(placeholder: "Username", text: $username)
            Spacer().frame(height: 18)
            PrimaryButton(title: "Reset") {
                
            }
            Spacer()
        }
        .padding(.horizontal)
        .navigationTitle("Reset password")
        .navigationBarBackButtonHidden(true)
        .navigationBarItems(leading: BackButton())
        
    }
}

struct LoginHelpView_Previews: PreviewProvider {
    static var previews: some View {
        LoginHelpView()
    }
}
