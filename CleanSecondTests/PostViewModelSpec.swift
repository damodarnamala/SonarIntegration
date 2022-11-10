import XCTest

@testable import CleanSecond

final class PostViewModelSpec: XCTestCase {

    func testOfflineData() throws {
        let viewModel = PostViewModel(useCase: PostMockUseCaseHandler(isInterNetAvailable: false))
        viewModel.fetchPosts()
        XCTAssertTrue(viewModel.viewState.posts.count == 1, "Fething offline mock usecased failed")
    }
    
    func testOnlineData() throws {
        let viewModel = PostViewModel(useCase: PostMockUseCaseHandler(isInterNetAvailable: true))
        viewModel.fetchPosts()
        XCTAssertTrue(viewModel.viewState.posts.count == 1, "Fething offline mock usecased failed")
    }
    
    func testPerformanceExample() throws {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }
}
