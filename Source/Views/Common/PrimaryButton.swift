

import SwiftUI

struct PrimaryButton: View {
    let title: String
    let action: () -> Void
    var body: some View {
        VStack {
            Button {
                action()
            } label: {
                Text(title)
                    .foregroundColor(Color(.white))
                    .font(.subheadline)
                    .frame(maxWidth: .infinity, maxHeight: 42)
                    .padding(.horizontal, 16)
                
            }
            .background(
                (Capsule(style: .circular))
                    .foregroundColor(.black))
            .cornerRadius(8)
            
        }
    }
}

struct PrimaryButton_Previews: PreviewProvider {
    static var previews: some View {
        PrimaryButton(title: "Login") { }
    }
}
