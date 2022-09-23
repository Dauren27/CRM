import React from "react";
import cl from "./Graduates.module.scss";

const Graduates = () => {
  return (
    <div className={cl.graduates}>
      <table>
        <thead>
          <tr>
            <td>Дата</td>
            <td>ФИО</td>
            <td>Курс</td>
            <td>Средний бал</td>
            <td>Проекты</td>
            <td>Код</td>
            <td>ИНН</td>
            <td>Сертификаты</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>17.09. 2022</td>
            <td>Алтынбеков Даурен</td>
            <td>Front-end</td>
            <td>90</td>
            <td><a href="https://github.com/Dauren27?tab=repositories">GitHub</a></td>
            <td>----</td>
            <td>123876</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Graduates;
