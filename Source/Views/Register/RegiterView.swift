//
//  RegiterView.swift
//  CleanSecond
//
//  Created by Damodar Namala on 11/11/22.
//

import Foundation
import SwiftUI

struct RegiterView: View {
    @State var username = ""
    @State var password = ""
    
    var body: some View {
        VStack {
            Spacer()
                .frame(height: 84)
            InputField(placeholder: "Username", text: $username)
            InputField(placeholder: "Password", text: $password)
            
            PrimaryButton(title: "Register") {
                
            }
            Spacer()
        }
        .padding(.horizontal)
        .navigationTitle("Registration")
        .navigationBarBackButtonHidden(true)
        .navigationBarItems(leading: BackButton())

    }
}

struct RegiterView_Previews: PreviewProvider {
    static var previews: some View {
        RegiterView()
    }
}
