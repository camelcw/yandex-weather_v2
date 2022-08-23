import { Input, MenuProps } from "antd";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import {
  BarsOutlined,
  UnorderedListOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Regions } from "../models/Region";

export type MenuItem = Required<MenuProps>["items"][number];

export function getMenuItems(defaultRegions: Regions[]) {
  function getItem(
    label: React.ReactNode,
    key?: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const [searchFiledRegion, setSearchFieldRegion] = useState<string>("");
  const [searchFiledCity, setSearchFieldCity] = useState<string>("");

  const handleChangeRegion = (event: any) => {
    setSearchFieldRegion(event.target.value);
  };

  const handleChangeCities = (event: any) => {
    setSearchFieldCity(event.target.value);
  };

  const getMenuItems = useMemo(
    () =>
      (regionFilter = "", cityFilter = "") => {
        let regions = [...defaultRegions];

        if (regionFilter.length > 0) {
          regions = regions.filter((region) =>
            region.name.toLowerCase().includes(regionFilter.toLowerCase()),
          );
        }

        const regionsAndCitiesTree = regions.map((region) => {
          let cities = [...(region.areas ?? [])];

          if (cityFilter.length > 0) {
            cities = cities.filter((city) =>
              city.name.toLowerCase().includes(cityFilter.toLowerCase()),
            );
          }

          return {
            id: region.id,
            name: region.name,
            cities: cities,
          };
        });

        return [
          getItem(
            <Link href="/settings">Настройки</Link>,
            "1",
            <SettingOutlined />,
          ),
          getItem("Регионы", "2", <BarsOutlined />, [
            getItem(
              <Input
                placeholder="Поиск..."
                onChange={handleChangeRegion}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />,
              "2-0",
              <></>,
            ),
            ...regionsAndCitiesTree.map((region) =>
              getItem(
                `${region.name}`,
                `2-${region.id}`,
                <UnorderedListOutlined />,
                [
                  getItem(
                    <Input
                      placeholder="Поиск..."
                      onChange={handleChangeCities}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />,
                    `3-${region.id}-1`,
                    <></>,
                  ),
                  ...(region.cities?.map((city) =>
                    getItem(
                      <Link href={`/region/${region.id}/${city.name}`}>
                        {city.name}
                      </Link>,
                      `3-${region.id}-${city.id}`,
                    ),
                  ) ?? []),
                ],
              ),
            ),
          ]),
        ];
      },
    [],
  );

  const [items, setItems] = useState<MenuItem[]>(getMenuItems());

  useEffect(() => {
    setItems(getMenuItems(searchFiledRegion, searchFiledCity));
  }, [searchFiledRegion, searchFiledCity]);

  return items;
}
