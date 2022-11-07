//
//  UserUseCaseHandler.swift
//  CleanSecond
//
//  Created by Damodar Namala on 07/11/22.
//

import Foundation

struct UserUseCaseHandler: UsersUseCase {
    
    var local: UserDataSource
    var remote: UserDataSource
    
    var internetProvider: InterProvider
    
    init(local: UserDataSource =  Local(), remote: UserDataSource = Remote()) {
        self.local = local
        self.remote = remote
        self.internetProvider = .init()
    }
    
    func request(_ request: UserEvents.Request, response: @escaping (UserEvents.Response) -> Void) {
        switch request {
            case .fetchAllUsers:
                if internetProvider.isOnline {
                    /// Fething users from remote
                    ///
                    /// Fething users on view loaded
                    ///

                    response(.users(remote.fetchUsers()))
                    
                } else {
                    ///
                    /// Fething users on view loaded
                    ///
                    response(.users(local.fetchUsers()))
                }
        }
    }
}


protocol UserDataSource {
    func fetchUsers() -> [String]
}

extension UserUseCaseHandler {
    struct Remote: UserDataSource {
        func fetchUsers() -> [String] {
            ///
            /// Fething users on view loaded
            ///
            ["Damodar"]
        }
    }
    
    struct Local: UserDataSource {
        func fetchUsers() -> [String] {
            ///
            /// Fething users on view loaded
            ///

            ["Damodar","Anu", "Aadi"]
        }
    }
}

struct InterProvider {
    var isOnline = true
}
