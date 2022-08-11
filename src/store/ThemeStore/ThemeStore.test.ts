import { ThemeStore } from "./ThemeStore";

describe("Тестирование ThemeStore", () => {
  const theme = new ThemeStore();
  test("Проверка дефолтного значения", () => {
    expect(theme.active).toBe<boolean>(true);
    expect(theme.active).not.toBe<boolean>(false);
  });
  test("Проверка setTheme", () => {
    theme.setTheme(false);
    expect(theme.active).toBe<boolean>(false);
    expect(theme.active).not.toBe<boolean>(true);
    theme.setTheme(true);
    expect(theme.active).toBe<boolean>(true);
    expect(theme.active).not.toBe<boolean>(false);
  });
  test("Проверка Toggle", () => {
    jest.spyOn(window, "alert").mockReturnValue();
    theme.Toggle();
    expect(theme.active).toBe<boolean>(false);
    expect(theme.active).not.toBe<boolean>(true);
    theme.active = false;
    theme.Toggle();
    expect(theme.active).toBe<boolean>(true);
    expect(theme.active).not.toBe<boolean>(false);
  });
});
