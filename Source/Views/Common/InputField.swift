

import SwiftUI

struct InputField: View {
    let placeholder : String
    @Binding var text: String
    var body: some View {
        VStack {
            TextField(placeholder, text: $text)
                .padding(.horizontal, 4)
                .foregroundColor(Color(.darkGray))
                .font(.subheadline)
                .padding(.vertical, 4)
            
            Divider()
        }
        .padding(.vertical, 6)
        .background(Color.gray.opacity(0.02))
    }
}


struct InputField_Previews: PreviewProvider {
    static var previews: some View {
        InputField(placeholder: "Username", text: .constant(""))
    }
}
