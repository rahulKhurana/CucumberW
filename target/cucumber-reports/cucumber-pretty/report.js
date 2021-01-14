$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tests.feature");
formatter.feature({
  "line": 1,
  "name": "Testing wallmart login and update personal info",
  "description": "",
  "id": "testing-wallmart-login-and-update-personal-info",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to wallmart",
  "description": "",
  "id": "testing-wallmart-login-and-update-personal-info;login-to-wallmart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Application \"WALMART\" is launched",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Verify title of page is \"walmart\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User hovers over \"signinhover\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on \"SignIn\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters \"mnprt.raina@gmail.com\" on \"Username\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters \"1LoveZindagi\" on \"password\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"signinbutton\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WALMART",
      "offset": 13
    }
  ],
  "location": "LoginStepDefinition.loginPage(String)"
});
formatter.result({
  "duration": 11562556500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "walmart",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.checkTitle(String)"
});
formatter.result({
  "duration": 7829600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "signinhover",
      "offset": 18
    }
  ],
  "location": "LoginStepDefinition.hoversOnElement(String)"
});
formatter.result({
  "duration": 2245664600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SignIn",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.elementClick(String)"
});
formatter.result({
  "duration": 20269012700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for presence of element located by: By.xpath: //button[@id \u003d \u0027sign-in-button\u0027] (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat StepDefinitions.LoginStepDefinition.getWebElement(LoginStepDefinition.java:114)\r\n\tat StepDefinitions.LoginStepDefinition.elementClick(LoginStepDefinition.java:90)\r\n\tat ✽.Then User clicks on \"SignIn\" button(tests.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //button[@id \u003d \u0027sign-in-button\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LEO-PC\u0027, ip: \u0027192.168.2.34\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:183)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:180)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat StepDefinitions.LoginStepDefinition.getWebElement(LoginStepDefinition.java:114)\r\n\tat StepDefinitions.LoginStepDefinition.elementClick(LoginStepDefinition.java:90)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat MyRunner.TestRunner.feature(TestRunner.java:42)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:40)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:489)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "mnprt.raina@gmail.com",
      "offset": 13
    },
    {
      "val": "Username",
      "offset": 40
    }
  ],
  "location": "LoginStepDefinition.enterTextInElement(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1LoveZindagi",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 31
    }
  ],
  "location": "LoginStepDefinition.enterTextInElement(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "signinbutton",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.elementClick(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Update contact details",
  "description": "",
  "id": "testing-wallmart-login-and-update-personal-info;update-contact-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Verify title of page is \"PersonalSettings\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User hovers over \"MyAccount\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on \"editPersonalInformation\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on \"edit\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"8723828783\" on \"phonenumber\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User clicks on \"save\" button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "PersonalSettings",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.checkTitle(String)"
});
formatter.result({
  "duration": 981600,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.LoginStepDefinition.checkTitle(LoginStepDefinition.java:62)\r\n\tat ✽.When Verify title of page is \"PersonalSettings\"(tests.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyAccount",
      "offset": 18
    }
  ],
  "location": "LoginStepDefinition.hoversOnElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "editPersonalInformation",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.elementClick(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "edit",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.elementClick(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8723828783",
      "offset": 13
    },
    {
      "val": "phonenumber",
      "offset": 29
    }
  ],
  "location": "LoginStepDefinition.enterTextInElement(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "save",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.elementClick(String)"
});
formatter.result({
  "status": "skipped"
});
});