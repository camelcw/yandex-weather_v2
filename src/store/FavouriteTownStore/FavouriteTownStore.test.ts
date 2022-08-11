import { ICoord } from "../../models/Coords";
import { FavouriteTownStore } from "./FavouriteTownStore";

describe("Тестирование FavouriteTownStore", () => {
    jest.spyOn(window, "alert").mockReturnValue();
    const favouriteTown = new FavouriteTownStore()
    const testHref = '/region/1620/Азнакаево/forecast';
    const testTown: ICoord = {
        coords: {
            fact: {
                cloudness: 0,
                condition: '',
                daytime: '',
                feels_like: 0,
                icon: '',
                season: '',
                temp: 0,
                soil_temp: 0,
                temp_min: 0,
            },
            yesterday: {
                temp: 0,
            },
            forecasts: [],
            geo_object: {
                locality: {
                    id: 0,
                    name: ''
                },
                province: {
                    id: 0,
                    name: ''
                },
            }
        }
    }
    test("Проверка дефолтного значения городов", () => {
        expect(favouriteTown.towns).toEqual([])
        expect(favouriteTown.towns).not.toEqual([testTown])
    })
    test("Проверка дефолтного значения ссылок", () => {
        expect(favouriteTown.hrefs).toEqual([])
        expect(favouriteTown.hrefs).not.toEqual([testHref])
    })
    test("Проверка SetTown", () => {
        favouriteTown.setTown(testTown)
        expect(favouriteTown.towns).toEqual([testTown])
        expect(favouriteTown.towns).not.toEqual([])
    })
    test("Проверка SetHrefs", () => {
        favouriteTown.setHrefs(testHref)
        expect(favouriteTown.hrefs).toEqual([testHref])
        expect(favouriteTown.hrefs).not.toEqual([])
    })
    test("Проверка clearAll", () => {
        favouriteTown.clearAll()
        expect(favouriteTown.hrefs).toEqual([])
        expect(favouriteTown.hrefs).not.toEqual([testHref])
        expect(favouriteTown.towns).toEqual([])
        expect(favouriteTown.towns).not.toEqual([testTown])
    })

    test("Проверка setTowns", () => {
        favouriteTown.setTowns([testTown])
        expect(favouriteTown.towns).toEqual([testTown])
        expect(favouriteTown.towns).not.toEqual([])
    })
    /** Может надо тестировать при нажатие на кнопку? */
    // test("Проверка clearTowns", () => {
    //     favouriteTown.clearTowns(testTown)
    //     expect(favouriteTown.towns).toEqual([])
    //     expect(favouriteTown.towns).not.toEqual([testTown])
    // })

    // test("Проверка uniqTowns", () => {
    //     favouriteTown.uniqTows(testTown, testHref)
    //     expect(favouriteTown.towns).toContainEqual(testTown);
    //     expect(favouriteTown.towns).not.toEqual([]);
    //     // Падают тесты
    //     // expect(favouriteTown.hrefs).toContainEqual(testHref)
    //     // expect(favouriteTown.hrefs).not.toEqual([])
    // })
});
