import { LoadingStore } from "./LoadingStore";

describe("Тестирование LoadingStore", () => {
  const laoding = new LoadingStore();
  test("Проверка дефолтного значения", () => {
    expect(laoding.isLoading).toBe<boolean>(true);
    expect(laoding.isLoading).not.toBe<boolean>(false);
  });
  test("Проверка setIsLoading", () => {
    laoding.setIsLoading(false);
    expect(laoding.isLoading).toBe<boolean>(false);
    expect(laoding.isLoading).not.toBe<boolean>(true);
    laoding.setIsLoading(true);
    expect(laoding.isLoading).toBe<boolean>(true);
    expect(laoding.isLoading).not.toBe<boolean>(false);
  });
  test("Проверка Toggle", () => {
    laoding.Toggle();
    expect(laoding.isLoading).toBe<boolean>(false);
    expect(laoding.isLoading).not.toBe<boolean>(true);
    laoding.isLoading = false;
    laoding.Toggle();
    expect(laoding.isLoading).toBe<boolean>(true);
    expect(laoding.isLoading).not.toBe<boolean>(false);
  });
});
