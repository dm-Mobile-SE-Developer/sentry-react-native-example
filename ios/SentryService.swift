import Foundation

@objc class SentryService: NSObject {
  let dsn = "PLACEHOLDER"
  let environment = "development"

  @objc func initializeClient() {
    print("Sentry init")

    let sentryOptions = try! Options(dict: [
      "environment": environment,
      "dsn": dsn,
      // (1) For privacy reasons we need to provide a toggle to enable/disable the client at any time Initially we start the SDK once (disabled), check the current toggle value, and activate the client later on (see 2)
      "enabled": false
    ])

    sentryOptions.beforeSend = { event in
      debugPrint("Sentry will send event: \(event)")
      return event
    }

    SentrySDK.start(options: sentryOptions)
    
    // (2) For privacy reasons we need to provide a toggle to enable/disable the client at any time
    // (3) This is the problem when using 5.1.9
    SentrySDK.currentHub().getClient()?.options.enabled = true
  }
}
