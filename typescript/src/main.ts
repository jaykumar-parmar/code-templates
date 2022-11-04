import { TestService } from "./services/test.service";

class Main {
    public static Method1() {
        console.log("Hello World");
        const testService: TestService = new TestService();
        testService.serviceMethod1();
    }
}

Main.Method1();
