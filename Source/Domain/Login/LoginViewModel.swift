//
//  LoginViewModel.swift
//  CleanSecond
//
//  Created by Damodar Namala on 10/11/22.
//

import Foundation

struct LoginViewState {
    var isLoggedIn = false
    var showRegiterView = false
    var showHelpView = false
    
    mutating func reset() {
        isLoggedIn = false
        showRegiterView = false
        showHelpView = false
    }
}

class LoginViewModel: ObservableObject {
    @Published var login =  LoginViewState()
    
    let usecase: LoginUseCase
    
    
    init(_ usecase: LoginUseCase = LoginUseCaseHandler()) {
        self.usecase = usecase
    }
    
    func perform(_ action: LoginEvent.Request) {
        usecase.request(action) { response in
            switch response {
                case .loginResponse(let isLoggedIn):
                    if isLoggedIn {
                        self.login.reset()
                        DatabaseHandler.shared.setUserLoggedIn()
                        self.login.isLoggedIn = true
                        return
                    }
                    self.login.isLoggedIn = true
            }
        }
    }
}
