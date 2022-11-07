//
//  UsersUseCase.swift
//  CleanSecond
//
//  Created by Damodar Namala on 07/11/22.
//

import Foundation

protocol UsersUseCase {
    func request(_ request: UserEvents.Request, response: @escaping (UserEvents.Response) -> Void)
}
