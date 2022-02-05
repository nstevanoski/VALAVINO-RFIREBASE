import React, { useEffect } from "react";
import "./ViewIndividualPrint.css";

import { Link } from 'react-router-dom';
import { People, Print } from "@material-ui/icons";

const ViewIndividualPrint = (props) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {props.selectedIndividualForPrintId === "" ? (
        <p>Дојде до грешка со базата</p>
      ) : (
        <div className="c12">
          <Link to="/suppliers/individual/view" className="btn btn-primary print-button">
            НАЗАД
          </Link>
          <Link onClick={() => window.print()} className="btn btn-warning print-button ml-1">
            <Print /> ПРИНТАЈ
          </Link>
          <Link target="_blank" to="/suppliers" className="btn btn-success print-button ml-1">
            <People/> ДОСТАВУВАЧИ
          </Link>
          <div className="c12">
            <p className="c1">
              <span className="c16">ДОГОВОР</span>
            </p>
            <p className="c1">
              <span className="c16">
                ЗА КУПОПРОДАЖБА НА ВИНСКО ГРОЗЈЕ ЗА РЕКОЛТАТА 2020 ГОДИНА
              </span>
            </p>
          </div>
          <p className="c0">
            <span className="c25"></span>
          </p>
          <p className="c5">
            <span className="c4">Склучен на ден 05.09.2020 помеѓу:</span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <ol className="c6 lst-kix_6ou024orqhig-0 start" start="1">
            <li className="c14 c20">
              <span className="c22">ВАЛАВИНО ДОО Росоман</span>
              <span className="c4">
                , со седиште на ул. Гоце Делчев Бр.13, Росоман, ЕМБС 7024345,
                ЕДБ 2000493852345, застапувано од Управителот на друштвото Гоце
                Мојсов како Купувач (во понатамошниот текст: КУПУВАЧОТ) и
              </span>
            </li>
            <br />
            <li className="c14 c20">
              <span className="c22">
                {props.selectedIndividualForPrintIme}{" "}
                {props.selectedIndividualForPrintPrezime}
              </span>
              <span className="c4">
                , со живеалиште на ул. {props.selectedIndividualForPrintAdresa},{" "}
                {props.selectedIndividualForPrintGrad}, ЕМБГ{" "}
                {props.selectedIndividualForPrintEmbg}, со трансакциска с-ка{" "}
                {props.selectedIndividualForPrintZiroSmetka}, Деп. Банка.{" "}
                {props.selectedIndividualForPrintDepBanka}, од друга страна како
                Продавач (во понатамошниот текст: ПРОИЗВОДИТЕЛ НА ГРОЗЈЕ).
              </span>
            </li>
          </ol>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">Член 1 - Предмет на договорот</span>
          </p>
          <p className="c1 c7">
            <span className="c4"></span>
          </p>
          <p className="c14">
            <span className="c4">
              Предмет на овој договор е купопродажба на грозје за потребите на
              производниот процес на КУПУВАЧОТ произведено на лозјето/лозјата на
              ПРОИЗВОДИТЕЛ НА ГРОЗЈЕ.
            </span>
          </p>
          <p className="c14">
            <span className="c4">
              Со склучувањето на овој Договор ПРОИЗВОДИТЕЛ НА ГРОЗЈЕ се обврзува
              да му предаде и продаде на КУПУВАЧОТ грозје, а КУПУВАЧОТ се
              согласува да прими и купи грозје произведено на лозјето/лозјата на
              ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">
              Член 2 - Дефиниција на сорти предмет на откуп
            </span>
          </p>
          <p className="c1 c7">
            <span className="c4"></span>
          </p>
          <p className="c5">
            <span className="c4">
              Следните сорти и очекувани количини се предмет на Членот 1:
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <table className="c21">
            <tbody>
              <tr className="c8">
                <td className="c24" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Р.бр</span>
                  </p>
                </td>
                <td className="c24" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Сорта</span>
                  </p>
                </td>
                <td className="c11" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Кат.општ</span>
                  </p>
                </td>
                <td className="c9" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Кат.парц.</span>
                  </p>
                </td>
                <td className="c13" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Викано место</span>
                  </p>
                </td>
                <td className="c23" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Повр.(м2)</span>
                  </p>
                </td>
                <td className="c15" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Очекувано (кг)</span>
                  </p>
                </td>
                <td className="c19" colSpan="1" rowSpan="1">
                  <p className="c17">
                    <span className="c3">Шеќ. ед. (%</span>
                  </p>
                  <p className="c17">
                    <span className="c3">на алк. во виното)</span>
                  </p>
                </td>
              </tr>
              <tr className="c8">
                <td className="c24" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">1</span>
                  </p>
                </td>
                <td className="c24" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">
                      {props.selectedIndividualForPrintSorta}
                    </span>
                  </p>
                </td>
                <td className="c11" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">
                      {props.selectedIndividualForPrintKatOpst}
                    </span>
                  </p>
                </td>
                <td className="c9" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">
                      {props.selectedIndividualForPrintKatParc}
                    </span>
                  </p>
                </td>
                <td className="c13" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">
                      {props.selectedIndividualForPrintVikMesto}
                    </span>
                  </p>
                </td>
                <td className="c23" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">
                      {props.selectedIndividualForPrintPovrsina}
                    </span>
                  </p>
                </td>
                <td className="c15" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">
                      {props.selectedIndividualForPrintOcekuvanokg}
                    </span>
                  </p>
                </td>
                <td className="c19" colSpan="1" rowSpan="1">
                  <p className="c2">
                    <span className="c4">
                      {props.selectedIndividualForPrintSeker}
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c14">
            <span className="c4">
              Предавањето на грозјето предмет на овој Договор ќе се врши во
              деловниот круг на ВАЛАВИНО ДОО во Подружницата Винарска Визба КО
              Росоман, ул. Гоце Делчев бр.13, Росоман, Росоман. КУПУВАЧОТ е
              должен за купеното грозје на ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ да му издаде
              за секоја предадена сорта грозје приемница - кантарна белешка
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">Член 3 - Цена и плаќање</span>
          </p>
          <p className="c1 c7">
            <span className="c4"></span>
          </p>
          <p className="c14">
            <span className="c4">
              Откупната цена за секоја сорта грозје ќе биде објавена на
              откупното место. Точната цена ќе се утврди најдозна на денот на
              откупот на грозјето. КУПУВАЧОТ плаќањето на купопродажната цена за
              предаденото количество грозе согласно овој Договор ќе го изврши на
              трансакциска сметка на ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ според законската
              регулатива на Република Северна Македонија.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">Член 4 - Берба</span>
          </p>
          <p className="c1 c7">
            <span className="c4"></span>
          </p>
          <p className="c14">
            <span className="c4">
              Точното време на бербата и денот на преземањето на грозјето
              предмет на овој Договор, во зависност од неопходната технолошка
              зрелост, ќе се определи дополнително, на начин што КУПУВАЧОТ ќе го
              извести ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ телефонски или преку огласна
              табла на откупното место за почетокот на откупот. ПРОИЗВОДИТЕЛОТ
              НА ГРОЗЈЕ ќе ги преземе потребните мерки бербата на грозјето и
              времето на предавањето да биде во назначеното време.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">
              Член 5 - Времетраење и раскинување на договорот
            </span>
          </p>
          <p className="c1 c7">
            <span className="c4"></span>
          </p>
          <p className="c5">
            <span className="c4">
              Овој Договор се склучува и се однесува само за бербата на грозјето
              од реколта 2020 година. Овој договор може да се раскине само под
              услови предвидени во Законот за облигациони односи.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">
              Член 6 - Обврски на производителот на грозје
            </span>
          </p>
          <p className="c1 c7">
            <span className="c3"></span>
          </p>
          <p className="c5">
            <span className="c4">
              ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ гарантира и е должен да го предаде
              грозјето предмет на овој Договор во здрава состојба без присуство
              на страни предмети, состојки кои не се грозје, да не е мешано со
              друга сорта на грозје, да биде со минимално присуство на лисја и
              без оксидација, со здраствена состојба без поголемо присуство на
              ботритис (трулеж од 10%). Предавањето на грозјето, односно
              испораката, ќе се изврши во истиот ден кога е берено грозјето
              според план, програма и динамика определена од КУПУВАЧОТ. Доколку
              грозјето што се предава ги нема шеќерните единици утврдени во Член
              2 на овој Договор или не ги исполнува условите од предходниот став
              на овој Член КУПУВАЧОТ не е во обврска да го преземе и купи
              понуденото количество грозје. КУПУВАЧОТ има право во секој момент
              да добие увид во списокот на користени заштитни препарати кои ги
              користи ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ во фазата на производство на
              грозјето.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">
              Член 7 - Невозможност за исполнување на обврската
            </span>
          </p>
          <p className="c1 c7">
            <span className="c3"></span>
          </p>
          <p className="c5">
            <span className="c4">
              Договорените страни се согласни, секоја од нив да биде ослободена
              од обврската за штетата поради неисполнување на своите обврски
              преземени од овој Договор. односно поради задоцнување со
              исполнувањето на истите, доколку до тоа дошло поради околности
              настанати по склучувањето на овој Договор кои не можеле да го
              спречат, отстранат или избегнат.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">Член 8 - Договорна казна</span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c5">
            <span className="c4">
              Договорените страни се согласни, доколку ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ
              не му ги предаде на КУПУВАЧОТ количините (по видовите) грозје од
              Член 2 на овој Договор, ПРОИЗВОДИТЕЛОТ НА ГРОЗЈЕ на КУПУВАЧОТ да
              му плати договорна казна во висина од 10% од вредноста на
              непредадените количини грозје, пресметано според цените од Член 2
              на овој Договор. Договорната казна треба да се исплати следниот
              ден по истекот на рокот за предавање на грозјето согласно планот
              од Член 4. Договорните страни се согласни, КУПУВАЧОТ да е овластен
              побарувањето за договорната казна од предходниот став да го
              копензира - пребие со паричното пребарување што ПРОИЗВОДИТЕЛОТ НА
              ГРОЗЈЕ го има по основ на овој Договор.
            </span>
          </p>
          <p className="c1">
            <span className="c3">Член 9</span>
          </p>
          <p className="c1 c7">
            <span className="c3"></span>
          </p>
          <p className="c5">
            <span className="c4">
              За се што не е предвидено со овој Договор ќе се применуваат
              одредбиде од ЗОО, Законот на земјоделство и рурален развој и
              Законот за виното. Секоја промена во Договорот може да се направи
              само во писмена форма со Анекс кон договорот.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c3">Член 10</span>
          </p>
          <p className="c1 c7">
            <span className="c3"></span>
          </p>
          <p className="c5">
            <span className="c4">
              Во случај на спор настанат од односите утврдени со овој Договор,
              договорните страни се согласни предходно спорот да го решат на
              мирен начин, а доколку во тоа не успеат спорниот однос ќе го
              решаваат пред стварно и месно надлежниот суд за Купувачот
              Основниот суд Скопје 2 во Скопје.
            </span>
          </p>
          <p className="c0">
            <span className="c4"></span>
          </p>
          <p className="c1">
            <span className="c22">Член 11</span>
          </p>
          <p className="c5">
            <span className="c4">
              Договорот стапува во сила и ќе се применува веднаш по
              потпишувањето, и е составен во 2 (два) истоветни примероци, по 1
              (еден) примерок за договорните страни
            </span>
          </p>
          <p className="c5">
            <p className="c0">
              <span className="c4"></span>
            </p>
            <p className="c0">
              <span className="c4"></span>
            </p>
            <p className="c0">
              <span className="c4"></span>
            </p>
            <table className="c21">
              <tbody>
                <tr className="c8">
                  <td className="c18" colSpan="1" rowSpan="1">
                    <p className="c10">
                      <span className="c4">ЗА ПРОИЗВОДИТЕЛОТ </span>
                    </p>
                    <p className="c10">
                      <span className="c4">НА ГРОЗЈЕ</span>
                    </p>
                    <p className="c2">
                      <span className="c4"></span>
                    </p>
                  </td>
                  <td className="c18" colSpan="1" rowSpan="1">
                    <p className="c10">
                      <span className="c4">ЗА КУПУВАЧОТ</span>
                    </p>
                    <p className="c10">
                      <span className="c4">ВАЛАВИНО ДОО РОСОМАН</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="c0">
              <span className="c4"></span>
            </p>
          </p>
        </div>
      )}
    </>
  );
};

export default ViewIndividualPrint;
