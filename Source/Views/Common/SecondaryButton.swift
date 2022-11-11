
import Foundation
import SwiftUI

struct SecondaryButton: View {
    let title: String
    let action: () -> Void
    var body: some View {
        VStack {
            Button {
                action()
            } label: {
                Text(title)
                    .foregroundColor(Color(.systemBlue))
                    .font(.subheadline)
                    .padding(16)
            }
        }
    }
}

struct SecondaryButton_Previews: PreviewProvider {
    static var previews: some View {
        PrimaryButton(title: "Login") { }
    }
}
