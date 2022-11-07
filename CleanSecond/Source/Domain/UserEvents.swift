//
//  UserEvents.swift
//  CleanSecond
//
//  Created by Damodar Namala on 07/11/22.
//

import Foundation
class UserEvents {
    enum Request {
        case fetchAllUsers
    }
    
    enum Response {
        case users(_ users: [String])
    }
}

