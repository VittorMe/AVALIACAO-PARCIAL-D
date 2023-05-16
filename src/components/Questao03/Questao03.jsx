import React, { useState, useEffect } from "react";
import axios from "axios";

const FunctionAxios = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://restcountries.com/v3.1/region/europe?fields=capital,population"
      );
      const data = response.data;

      // Calcula a média das populações
      const totalPopulation = data.reduce(
        (acc, country) => acc + country.population,
        0
      );
      const averagePopulation = totalPopulation / data.length;

      // Filtra os países com população maior que a média
      const countriesAboveAverage = data.filter(
        (country) => country.population > averagePopulation
      );

      // Imprime as capitais e populações na tabela
      console.table(
        countriesAboveAverage.map(
          (country) => country.capital[0] + "-" + country.population
        )
      );
      alert(
        countriesAboveAverage.map(
        (country) => country.capital[0] + "-" + country.population
      ))
    } catch (error) {
      console.log(error);
    }
  };

  return <div>Carregando...</div>;
};

export default FunctionAxios;
