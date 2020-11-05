//
//  AppUITests.swift
//  AppUITests
//
//  Created by Paula Engelberg on 2020/10/15.
//

import XCTest

class AppUITests: XCTestCase {

    override func setUpWithError() throws {
        // Put setup code here. This method is called before the invocation of each test method in the class.

        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }

    override func tearDownWithError() throws {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() throws {
        // UI tests must launch the application that they test.
        let app = XCUIApplication()
        app.launch()
        sleep(5)
        
        let webViewsQuery = XCUIApplication().webViews.webViews.webViews
        let ellipsisHorizontalImage = webViewsQuery.images["ellipsis horizontal"]
        ellipsisHorizontalImage.tap()
        ellipsisHorizontalImage.tap()
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Press for next page"]/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".links.matching(identifier: \"Press for next page\").staticTexts[\"Press for next page\"]",".staticTexts[\"Press for next page\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Press for previous page"]/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".links.matching(identifier: \"Press for previous page\").staticTexts[\"Press for previous page\"]",".staticTexts[\"Press for previous page\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
        ellipsisHorizontalImage.tap()
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Person 17"].swipeRight()/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".otherElements[\"Person 17\"]",".staticTexts[\"2\"]",".swipeUp()",".swipeRight()",".staticTexts[\"Person 17\"]"],[[[-1,6,4],[-1,2,3],[-1,1,2],[-1,0,1]],[[-1,6,4],[-1,2,3],[-1,1,2]],[[-1,6,4],[-1,2,3]],[[-1,6,4],[-1,3,4]],[[-1,5],[-1,4]]],[0,0]]@END_MENU_TOKEN@*/
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Person 29"]/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".otherElements[\"Person 29\"]",".staticTexts[\"2\"]",".staticTexts[\"Person 29\"]"],[[[-1,4],[-1,2,3],[-1,1,2],[-1,0,1]],[[-1,4],[-1,2,3],[-1,1,2]],[[-1,4],[-1,2,3]],[[-1,4],[-1,3]]],[0]]@END_MENU_TOKEN@*/.swipeUp()
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Person 39"]/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".otherElements[\"Person 93\"]",".staticTexts[\"2\"]",".staticTexts[\"Person 39\"]"],[[[-1,4],[-1,2,3],[-1,1,2],[-1,0,1]],[[-1,4],[-1,2,3],[-1,1,2]],[[-1,4],[-1,2,3]],[[-1,4],[-1,3]]],[0]]@END_MENU_TOKEN@*/.swipeUp()
        
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }
    
    func testOpenCloseDrawer() throws {
     
      let app = XCUIApplication()
      app.launch()

      let half : CGFloat = 0.5
      let right : CGFloat = 0.8
      let left : CGFloat = 0.01
      let pressDuration : TimeInterval = 0.05
      let start = app.coordinate(withNormalizedOffset: CGVector(dx: left, dy: half))
      let center = app.coordinate(withNormalizedOffset: CGVector(dx: half, dy: half))
      let outerDrawer = app.coordinate(withNormalizedOffset: CGVector(dx: right, dy: half))
    
      let nrSwipes = 3
      for i in 1 ..< nrSwipes {
        if i == 1 {
          sleep(3)
          start.press(forDuration: pressDuration, thenDragTo: center)
          sleep(3)
          outerDrawer.tap()
          sleep(3)
        } else {
          start.press(forDuration: pressDuration, thenDragTo: center)
          sleep(3)
          outerDrawer.tap()
          sleep(3)
          }
      }
      sleep(5)
    }
       
    func testSwitchPages() throws {
        let app = XCUIApplication()
        app.launch()
        
        sleep(3)
        let webViewsQuery = XCUIApplication().webViews.webViews.webViews
        let ellipsisHorizontalImage = webViewsQuery.images["ellipsis horizontal"]
        ellipsisHorizontalImage.tap()
        
        sleep(3)
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Press for next page"]/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".links.matching(identifier: \"Press for next page\").staticTexts[\"Press for next page\"]",".staticTexts[\"Press for next page\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
        sleep(4)
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Press for previous page"]/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".links.matching(identifier: \"Press for previous page\").staticTexts[\"Press for previous page\"]",".staticTexts[\"Press for previous page\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
        sleep(4)
        webViewsQuery/*@START_MENU_TOKEN@*/.staticTexts["Press for next page"]/*[[".otherElements[\"Ionic App\"]",".otherElements[\"main\"]",".links.matching(identifier: \"Press for next page\").staticTexts[\"Press for next page\"]",".staticTexts[\"Press for next page\"]"],[[[-1,3],[-1,2],[-1,1,2],[-1,0,1]],[[-1,3],[-1,2],[-1,1,2]],[[-1,3],[-1,2]]],[0]]@END_MENU_TOKEN@*/.tap()
        sleep(4)
    }
       
    func testSwipeList() throws{
        let app = XCUIApplication()
        app.launch()
        sleep(3)
        
        let webViewsQuery = XCUIApplication().webViews.webViews.webViews
        let ellipsisHorizontalImage = webViewsQuery.images["ellipsis horizontal"]
        sleep(3)
        ellipsisHorizontalImage.tap()
        sleep(3)
        ellipsisHorizontalImage.tap()
        
        app.swipeUp()
        sleep(3)
        app.swipeUp()
        sleep(3)
        app.swipeUp()
        sleep(5)
    }

    func testLaunchPerformance() throws {
        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, *) {
            // This measures how long it takes to launch your application.
            measure(metrics: [XCTApplicationLaunchMetric()]) {
                XCUIApplication().launch()
            }
        }
    }
}
