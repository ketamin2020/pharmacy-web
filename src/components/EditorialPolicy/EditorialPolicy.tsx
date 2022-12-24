import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { ListItem, List } from '@material-ui/core'

const Wrapper = styled.div`
  & * {
    font-family: var(--primaryFont);
  }
  & li::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--greenColor);
    position: absolute;
    top: 13px;
    left: -20px;
  }
`
export const EditorialPolicy = () => {
  return (
    <Wrapper>
      <Typography>
        Ми знаємо, що довіру потрібно заслужити, тому вважаємо за необхідне розповісти, як apteka24.ua створює точний,
        зрозумілий, актуальний і науково доведений контент.
      </Typography>
      <Typography>
        Знайти інформацію про здоров&apos;я і благополуччя в інтернеті дуже просто — вона є всюди. Але знайти
        достовірну, актуальну і корисну інформацію — складно і навіть утомливо. apteka24.ua все змінює. Ми робимо
        інформацію про здоров&apos;я зрозумілою і доступною, щоб ви могли приймати оптимальні та медично обґрунтовані
        рішення щодо свого здоров&apos;я і здоров&apos;я своїх близьких.
      </Typography>
      <h3>Сфери регулювання редакційної політики</h3>
      <Typography>
        Існуюча редакційна політика apteka24.ua регулює такі сфери діяльності і комунікації веб-сайту apteka24.ua (далі
        — Сайт) з клієнтами:
      </Typography>
      <List>
        <ListItem>головна сторінка Сайту;</ListItem>
        <ListItem>навігація всіх сторінок Сайту;</ListItem>

        <ListItem>каталог товарів;</ListItem>
        <ListItem>картки товарів (інструкція, характеристика, опис, підбір аналогів);</ListItem>

        <ListItem>опис акцій, програм лояльності, купонів і знижок;</ListItem>
        <ListItem>статті блогу, огляди, дайджести, новинні оголошення;</ListItem>

        <ListItem>email-розсилка, спливаючі повідомлення, інформування в чаті.</ListItem>
      </List>
      <h3>Наші етичні принципи</h3>

      <Typography>
        Принципи apteka24.ua, якими ми керуємося у своїй роботі і які організовують і визначають всі сфери регулювання
        редакційної політики, такі::
      </Typography>
      <h4>№1 Достовірність</h4>
      <Typography>
        Ми ретельно стежимо за тим, щоб вся інформація на Сайті була актуальною і правдивою. Редакторська команда
        медичних експертів , що включає фармацевтів компанії і лікарів-експертів відповідної спеціалізації і
        компетенції, являється цензорами Сайту, перевіряє всі інструкції і описи до препаратів, стежить за правильністю
        підбору фото до товарів і достовірністю статей в блозі.
      </Typography>
      <h4>№2 Актуальність</h4>
      <Typography>
        На сайті розміщена тільки актуальна інформація, яка редагується по мірі її надходження і змін в офіційних
        джерелах. Інструкції до лікарських засобів регулярно оновлюються залежно від нових змін, внесених в Державний
        реєстр лікарських засобів України, або на сайті виробника.
      </Typography>
      <h4>№3 Корисність</h4>
      <Typography>
        Ми дбаємо про те, щоб вся інформація, розміщена на Сайті, була корисною користувачам, просвітлювала, відповідала
        на питання і вирішувала проблеми.
      </Typography>
      <h4>№4 Відповідальність</h4>
      <Typography>
        apteka24.ua несе повну відповідальність за всі матеріали та інформацію, опубліковані на Сайті. Ми гарантуємо
        достовірність, релевантність, надійність і актуальність всіх матеріалів, розміщених на Сайті.
      </Typography>
      <h4>№5 Наукова обґрунтованість</h4>
      <Typography>
        Ми не використовуємо неперевірені факти і дані, а спираємося в своїх матеріалах тільки на офіційні і перевірені
        джерела інформації. Кожен тип контенту проходить обов&apos;язкову верифікацію з боку медичного експерта, що
        входить в редакторську команду apteka24.ua.
      </Typography>
      <h4>№6 Джерела інформації</h4>
      <Typography>До джерел інформації на сайті apteka24.ua відносяться:</Typography>
      <Typography>
        1. <strong>Офіційне джерело</strong> — надійне першоджерело, що володіє доказовими, науково і клінічно
        підтвердженими, схваленими Всесвітньою організацією охорони здоров&apos;я або Міністерством охорони
        здоров&apos;я України даними.
      </Typography>

      <Typography>До офіційних джерел відносяться::</Typography>
      <List>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://www.who.int/ru'>
            Всесвітня організація охорони здоров&apos;я;
          </a>
        </ListItem>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://moz.gov.ua/'>
            Міністерство охорони здоров&apos;я України;
          </a>
        </ListItem>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://zakon.rada.gov.ua/laws/show/2801-12#Text'>
            Закон України «Основи законодавства України про охорону здоров&apos;я»;
          </a>
        </ListItem>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://zakon.rada.gov.ua/laws/show/123/96-%D0%B2%D1%80#Text'>
            Закон України «Про лікарські засоби»;
          </a>
        </ListItem>

        <ListItem>
          <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
            Державний реєстр лікарських засобів України;
          </a>
        </ListItem>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://www.nlm.nih.gov/'>
            Національна бібліотека медицини США;
          </a>
        </ListItem>

        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://pubmed.ncbi.nlm.nih.gov/'>
            База даних Національного центру біотехнологічної інформації США;
          </a>
        </ListItem>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://www.cdc.gov/'>
            Центр по контролю і профілактиці захворювань;;
          </a>
        </ListItem>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='https://www.fda.gov/'>
            Управління з санітарного нагляду за якістю харчових продуктів і медикаментів (FDA).
          </a>
        </ListItem>
      </List>
      <Typography>
        2. <strong>Перевірение джерело</strong> — першоджерело (наукова стаття, дисертація, огляд наукового
        дослідження), що володіє переконливими, але не досить достовірними даними, тому потребує перевірки на
        достовірність медичним експертом. Проходить обов&apos;язкову верифікаційну перевірку уповноваженим цензором з
        вищою медичною або фармацевтичною освітою на відповідність фактів дійсності і науковій доказовості.
      </Typography>
      <Typography>
        Кожен вид контенту на Сайті супроводжується статусом «Офіційне джерело» або «Перевірене джерело». .
      </Typography>
      <h4>№7 Грамотність і точність</h4>
      <Typography>
        Над кожним текстом проводиться редакторська робота, яка має на меті, щоб всі матеріали на Сайті були
        опубліковані без помилок і неуточнених деталей. Ми стежимо за орфографічною, пунктуаційною, граматичною,
        синтаксичною, лінгвістичною і семантичною грамотністю і точною подачею інформації.
      </Typography>
      <h4>№8 Унікальність</h4>
      <Typography>
        Ми не займаємося плагіатом. Всі наші статті проходять перевірку на унікальність і допускаються до публікації
        лише в тому випадку, якщо унікальність матеріалу досягає 95% і вище згідно сервісу text.ru.
      </Typography>
      <h4>№9 Доступність</h4>
      <Typography>
        Вся інформація, розміщена на Сайті apteka24.ua, повинна бути доступною і зрозумілою для широких мас населення.
        Не допускається використання двозначних, неуточнених і розмитих слів, фраз і виразів, а також термінології
        вузької спеціалізації без роз&apos;яснення і уточнення смислової і семантичної спрямованості.
      </Typography>
      <Typography>
        Кожен тип контенту зобов&apos;язаний бути максимально повним і розкривати всі питання по темі.
      </Typography>
      <h4>№10 Законність</h4>
      <Typography>
        Весь контент сайту зобов&apos;язаний відповідати{' '}
        <a rel='noreferrer' target='_blank' href='https://pravoved.in.ua/section-law/158-zuoapisp.html'>
          Закону України «Про авторське право і суміжні права»{' '}
        </a>
        і не порушувати авторське право першоджерел. Плагіат заборонений.
      </Typography>
      <Typography>
        Вся інформація підлягає глибокій і ретельній переробці та внесенню змін. При дослівному використанні інформації
        з офіційного або перевіреного джерела вказується гіперпосилання на першоджерело.
      </Typography>
      <Typography>
        Використання інструкції, характеристик і описів препаратів, вилучених з{' '}
        <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
          {' '}
          Державного реєстру лікарських засобів України
        </a>
        , обов&apos;язково супроводжується вказівкою знака копірайту © і найменуванням джерела.
      </Typography>
      <h3>Редакційний процес створення контенту</h3>
      <Typography>
        Ми говоримо просто і доступно про складні теми і уникаємо використання медичної та наукової термінології без
        розкриття значення термінів доступною для розуміння мовою. Тому, якщо ви шукаєте засноване на фактах керівництво
        по конкретному захворюванню, з питань здоров&apos;я або загальному самопочуттю, то ми тут саме для вас.
      </Typography>
      <Typography>
        Весь наш контент створюється для того, щоб ви могли прийти до загального добробуту, котрий досягається завдяки
        гармонійному взаємозв&apos;язку психічного і фізичного. Ми допомагаємо встановити цей зв&apos;язок і змінити
        спосіб життя. У нашому розумінні, як і в розумінні ВООЗ [Офіційне джерело], це називається «загальним
        здоров&apos;ям людини». І щоб слідувати цим шляхом, ми відкрито і об&apos;єктивно висвітлюємо широке коло тем і
        точок зору на всі сфери життя людини..
      </Typography>
      <h4>Наша місія</h4>
      <Typography>
        Наша мета — бути вашим найнадійнішим союзником у прагненні до досягнення здоров&apos;я і благополуччя. Ми хочемо
        бути тими, кому ви можете довіряти і хто вас не підведе. Тому у всьому контенті ми надаємо докази своєї
        надійності..
      </Typography>
      <h4>Процес створення контенту</h4>
      <Typography>
        Редакція і медичні експерти apteka24.ua прагнуть створювати якісний, актуальний, корисний і достовірний контент,
        дотримуючись найвищих журналістських стандартів в галузі медицини і здоров&apos;я. Ми прагнемо надати вичерпні,
        неупереджені, чесні і своєчасні рекомендації та практичні поради, новини та огляди, керівництва та інструкції.
      </Typography>
      <h4>Наша команда медичних експертів</h4>
      <Typography>
        Медичний контент apteka24.ua створюється на підставі фактів, наукових даних і офіційних або перевірених джерел,
        а також перевіряється кваліфікованими авторами, редакторами, лікарями, фармацевтами та іншими
        фахівцями-консультантами команди, які поділяють і підтримують погляди нашої редакції.
      </Typography>
      <Typography>
        Контент загального здоров&apos;я і соціокультурної сфери життя створюється з не меншою педантичністю,
        ґрунтується на авторитетних думках і висновках експертів, однак може містити непідтверджені науковим шляхом
        дані, так як галузі науки не в повній мірі покривають всі сфери життя людини та її інтересів. У розважальних
        категоріях блогу ми можемо розглядати емпірично непідтверджені, але поширені і ті, що мають місце бути
        актуальними, теми для людей з різними точками зору.
      </Typography>
      <h4>Наш процес верифікації контенту</h4>
      <Typography>
        Відомості про лікарські препарати, товари медичного призначення, а також інформація з питань здоров&apos;я і
        благополуччя в блозі apteka24.ua перевіряються групою професійних медиків, фармацевтів або редакторів для
        забезпечення точності, достовірності, актуальності та релевантності.
      </Typography>

      <Typography>
        На нашу команду медичних цензорів можна покластися — це фахівці широкого спектру медичних галузей, у яких за
        плечима великий досвід клінічної практики, досліджень і захисту інтересів пацієнтів.
      </Typography>
      <h4>Наші автори</h4>
      <Typography>
        apteka24.ua ретельно оцінює всіх потенційних авторів статей про здоров&apos;я і благополуччя. Перш, ніж ми
        опублікуємо статтю, ми обов&apos;язково повинні переконатися, що автори контенту є фахівцями в предметній
        області, що освітлюється в контенті, а також, що у них є відповідний життєвий досвід.
      </Typography>
      <Typography>
        Авторів редакції ми навчаємо передовим методам ведення дослідницької журналістської діяльності, пошуку лідерів
        думок і професійних експертів, а також регулярно надаємо їм зворотний зв&apos;язок і безперервне навчанняе.
      </Typography>
      <h4>Наші посилання, джерела і цитати</h4>
      <Typography>
        У нас суворі правила вибору першоджерел, так як ми покладаємося на дослідження, що рецензуються, академічні
        дослідницькі інститути, урядові установи і медичні асоціації. Список джерел, інформація в яких вважається
        офіційними неспростовними даними, прописаний в нашій редакційній політиці.
      </Typography>

      <Typography>
        Кожна стаття ретельно досліджується, а джерела перевіряються на предмет актуальності, достовірності та
        об&apos;єктивності.
      </Typography>
      <Typography>
        Першоджерела, включаючи дослідження, наукові посилання і статистичні дані, вказуються активними посиланнями в
        кожній статті..
      </Typography>
      <h4>Наші оновлення та актуалізація</h4>
      <Typography>
        Редакція apteka24.ua постійно стежить за змінами в медичній, науковій та соціокультурній сферах. З появою нової
        інформації ми оновлюємо статті.
      </Typography>

      <Typography>
        У нас є встановлений графік обслуговування статей, що має на увазі щорічне оновлення контенту, однак оновлення
        можуть бути проведені заздалегідь в таких випадках:
      </Typography>
      <List>
        <ListItem>поява нової доведеної інформації, яка спростовує попереднє положення;</ListItem>
        <ListItem>зміни в стандартах лікування і догляду за хворими;</ListItem>

        <ListItem>нові клінічні рекомендації;</ListItem>
        <ListItem>вихід на ринок або відгук лікарських засобів;;</ListItem>

        <ListItem>зміна істотних практичних рекомендацій;</ListItem>
        <ListItem>
          звернення читачів, що аргументують прохання про зміну неактуального або недостовірного контенту.
        </ListItem>
      </List>
      <Typography>
        Читач може звернутися до нас з попередженням про потенційну проблему з нашим контентом, наприклад, про неточну,
        застарілу, нечітку або суперечливу інформацію. В такому випадку, ми реагуємо негайно і вживаємо заходів.
      </Typography>
      <Typography>
        Редакція і команда медичних експертів вивчають отримані відгуки, визначають, які зміни необхідно внести в
        контент, і повторно публікують оновлену інформацію
      </Typography>
      <h4>Наш tone of voice</h4>
      <Typography>
        Ми говоримо зрозуміло і доступно, тепло і по-домашньому, але при цьому наш голос звучить сміливо і прогресивно.
      </Typography>
      <Typography>
        Основний акцент у своїй мові ми робимо на простоту, точність, емпатію та відкритість. Позитивність подачі
        інформації відіграє важливу роль, так як ми хочемо вселяти надію і дарувати радість, а не зациклювати читачів на
        негативі. Ми використовуємо позитивну мову, яка стимулює до активних дій для зміни свого способу життя на кращу
        сторону..
      </Typography>

      <Typography>
        На всіх рівнях комунікації з читачами і клієнтами ми дотримуємося свідомості і намагаємося доносити інформацію
        максимально доступно і зрозуміло для будь-якої людини.
      </Typography>
      <h4>Ми чекаємо на вашу думку</h4>
      <Typography>
        Ми сповнені рішучості надавати вам тільки найпозитивніші враження і корисну інформацію. Тому ми будемо раді
        отримати від вас зворотній зв&apos;язок з відгуками, питаннями і зауваженнями, адже ваша думка допоможе нам
        досягти більшого.
      </Typography>
      <h3>Редакційна політика медичних товарів</h3>
      <Typography>
        Картки товарів на Сайті містять офіційну інструкцію, характеристики товару, опис та аналоги. Вся інформація
        відповідає офіційним джерелам і перевіряється уповноваженим медичним цензором.
      </Typography>
      <h4>№1 Інструкція</h4>
      <Typography>
        Інструкції лікарських засобів і препаратів можуть бути взяті тільки з офіційного джерела{' '}
        <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
          Державного реєстру лікарських засобів України
        </a>
        . Описи товарів медичного призначення повинні відповідати офіційному джерелу, яким є сайт виробника..
      </Typography>

      <Typography>Інструкція заповнюється виключно українською мовою і повинна містити такі пункти:</Typography>
      <List>
        <ListItem>склад;</ListItem>
        <ListItem>лікарська форма;</ListItem>

        <ListItem>основні фізико-хімічні властивості;</ListItem>
        <ListItem>фармакотерапевтична група;</ListItem>
        <ListItem>фармакологічні властивості;</ListItem>

        <ListItem>показання;</ListItem>
        <ListItem>протипоказання;</ListItem>

        <ListItem>взаємодія з іншими лікарськими засобами та інші види взаємодій;</ListItem>
        <ListItem>особливості застосування;</ListItem>
        <ListItem>затність впливати на швидкість реакції при керуванні транспортом і складними механізмами;</ListItem>

        <ListItem>спосіб застосування та дози;</ListItem>
        <ListItem>передозування;</ListItem>
        <ListItem></ListItem>

        <ListItem>побічні реакції;</ListItem>
        <ListItem>термін придатності;</ListItem>
        <ListItem>умови зберігання;</ListItem>

        <ListItem>упаковка;</ListItem>
        <ListItem>категорія відпуску;</ListItem>

        <ListItem>виробник;</ListItem>
        <ListItem>місцезнаходження виробника.</ListItem>
      </List>
      <h4>№2 Характеристики</h4>
      <Typography>
        Характеристики товарів заповнюються відповідно до офіційного джерела{' '}
        <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
          (Державний реєстр лікарських засобів України)
        </a>
        , являються коротким відображенням основних характеристик препарату, перевіряються медичним цензором на
        відповідність дійсності і містять такі пункти:
      </Typography>
      <List>
        <ListItem>АТС-Класифікація;</ListItem>
        <ListItem>рецептурний відпуск;</ListItem>

        <ListItem>термін придатності;</ListItem>
        <ListItem>придатний до;</ListItem>
        <ListItem>дозування;</ListItem>

        <ListItem>упаковка;</ListItem>
        <ListItem>склад;</ListItem>

        <ListItem>показання;</ListItem>
        <ListItem>противопоказання;</ListItem>

        <ListItem>код Моріон;</ListItem>
        <ListItem>фармакотерапевтична група;</ListItem>

        <ListItem>діюча речовина;</ListItem>
        <ListItem>українська назва.</ListItem>
      </List>
      <h4>№3 Опис</h4>
      <Typography>
        Опис лікарського засобу або препарату грунтується на офіційній інструкції{' '}
        <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
          (Державний реєстр лікарських засобів України)
        </a>{' '}
        або маркетинговому матеріалі з офіційного сайту виробника і є доступним для пацієнта інформуванням про важливі
        властивості, взаємодії, клінічні характеристики та особливості лікарського засобу. Проходить перевірку медичним
        цензором на відповідність дійсності
      </Typography>
      <h4>№4 Алгоритм підбору аналогів лікарського засобу</h4>
      <Typography>
        Картка товарів кожного препарату містить його аналоги. Підбір аналогів лікарського засобу на сайті apteka24.ua
        відбувається за алгоритмом, затвердженим Центром ВООЗ згідно методології статистики лікарських засобів і
        прийнятим Міністерством охорони здоров&apos;я України:
      </Typography>
      <List>
        <ListItem>
          Перший рівень: аналогічні лікарські засоби з тією самою діючою речовиною, дозуванням і формою випуску.
        </ListItem>
        <ListItem>
          Другий рівень: аналогічні лікарські засоби з тією самою діючою речовиною, дозуванням, але з іншою формою
          випуску.
        </ListItem>

        <ListItem>
          Третій рівень: аналогічні лікарські засоби з тією самою діючою речовиною, але з іншим дозуванням і іншою
          формою випуску.
        </ListItem>
        <ListItem>
          Четвертий рівень: аналогічні лікарські засоби, підібрані відповідно до АТС-класифікації, які можуть містити
          іншу діючу речовину, інше дозування і іншу форму випуску, але надають схожий клінічний ефект і можуть
          застосовуватися для лікування того ж захворювання або мають вплив на ту ж систему органів або органів.
        </ListItem>
      </List>
      <Typography>Точність проходження алгоритму перевіряється медичним цензором.</Typography>
      <h4>№5 Основні фізико-хімічні властивості</h4>
      <Typography>Картка товару повинна містити опис фізико-хімічних властивостей препарату.</Typography>
      <Typography>
        Даний розділ відображає класифікацію лікарських засобів в залежності від температурного режиму зберігання із
        зазначенням діапазону допустимих температур, що не порушують фізико-хімічні властивості препарату, а також форму
        випуску, об&apos;єм, кількість в упаковці і дані про виробника.
      </Typography>

      <Typography>
        Інформація відповідає Державному реєстру лікарських засобів України та офіційному сайту виробника, а також
        перевіряється уповноваженим медичним цензором на відповідність дійсності.
      </Typography>
      <h4>№6 Сертифікат</h4>
      <Typography>Картка товару лікарського засобу містить посилання на скачування сертифіката якості..</Typography>

      <Typography>
        Сертифікат якості є гарантом достовірності лікарського препарату і стверджує відповідність якісних характеристик
        лікарського засобу його властивостями, заявленим в інструкції. Сертифікат якості видається препарату тільки
        після експертизи{' '}
        <a rel='noreferrer' target='_blank' href='https://www.dls.gov.ua/'>
          Державної служби України з лікарських засобів та контролю за наркотиками
        </a>{' '}
        та присудження препарату сертифіката GMP. Сертифікат якості відповідає вимогам українського законодавства,
        затвердженого реєстраційного свідоцтва, специфікації МКК (методи контролю якості) і сертифікату відповідності
        виробництва лікарських засобів відповідно до вимог GMP, а також проходить перевірку медичним цензором
        apteka24.ua на відповідність дійсності.
      </Typography>
      <h4>№7 Верифікація</h4>
      <Typography>
        Кожен інформаційний блок в картках товарів проходить верифікацію на релевантність інформації, її достовірність і
        наукову доказовість. Верифікацію проводить уповноважений медичний цензор, що належить до редакційної команди
        медичних експертів apteka24.ua.
      </Typography>

      <Typography>
        Інструкції повинні відповідати офіційному джерелу, яким{' '}
        <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
          Державний реєстр лікарських засобів України
        </a>{' '}
        , бути точними і достовірними офіційним даними.
      </Typography>
      <Typography>
        У кожній картці товару вказується медичний експерт-цензор, який перевірив і схвалив її, а також статус контенту
        «Перевірено», при наведенні курсору на який спливає підказка, яка розкриває суть статусу.
      </Typography>

      <Typography>
        Підказка статусу «Перевірено» містить наступну інформацію: «Перевірено. Вся зазначена інформація відповідає
        офіційному джерелу і достовірним даним, перевірена і схвалена уповноваженим цензором на відповідність дійсності.
        Для того, щоб ознайомитися з редакційною політикою apteka24.ua натисніть на «Перевірено.
      </Typography>
      <Typography>
        Кожна інструкція містить знак копірайту © з зазначенням офіційного джерела{' '}
        <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
          (Державний реєстр лікарських засобів України)
        </a>{' '}
        і значок підказки з повідомленням про верифікацію інструкції.
      </Typography>

      <Typography>Підказка містить наступний текст:</Typography>
      <Typography>
        Дана інструкція відповідає дійсності і є достовірною. Офіційне джерело: Державний реєстр лікарських засобів
        України [Офіційне джерело]. Публікація інструкції та опису здійснена на підставі редакційної політики
        apteka24.ua, відповідає «Закону України «Про лікарські засоби» [Офіційне джерело] і «Закону України «Про
        авторське право і суміжні права» [Офіційне джерело],а також перевірена уповноваженим цензором. Оновлення
        інструкції на сайті apteka24.ua здійснюється після її поновлення на сайті Державного реєстра лікарських засобів
        України, або на офіційному сайті виробника.
      </Typography>
      <h4>№8 Оновлення</h4>
      <Typography>
        Не рідше, ніж раз на рік, кожен інформаційний блок карток товарів (інструкція, характеристика, опис) повинен
        підлягати перегляду на предмет відповідності оновленням в офіційному джерелі{' '}
        <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
          Державний реєстр лікарських засобів України
        </a>{' '}
        . При виявленні оновлень в офіційному джерелі, дані поновлення повинні бути внесені в картку товару на Сайті.
      </Typography>
      <Typography>
        Кожне оновлення карток товару підлягає верифікації з боку уповноваженого медичного цензора.
      </Typography>
      <h4>№9 Джерела інформації</h4>
      <Typography>До джерел інформації карток товарів відносяться тільки офіційні джерела:</Typography>
      <List>
        <ListItem>
          <a rel='noreferrer' target='_blank' href='http://www.drlz.com.ua/'>
            Державний реєстр лікарських засобів України
          </a>{' '}
        </ListItem>
        <ListItem>сайт виробника товарів.</ListItem>
      </List>
      <h3>Спірні питання</h3>

      <Typography>
        Будь-яка медична і наукова інформація, що подається в статтях блогу в рубриці «Здоров&apos;я», не може містити
        непідтверджену інформацію, що суперечить офіційним науковим даним.
      </Typography>
      <Typography>
        У тому випадку, якщо на даний момент часу немає грунтовних і однозначно доказових даних, якщо тема суперечлива і
        думки медичних експертів і вчених розходяться по освітленому приводу, то необхідно в матеріалі вказати спірність
        даного питання. Така стаття повинна містити відмову від відповідальності з боку редакції з поясненням
        недостатньої доказовості питання.
      </Typography>
      <Typography>
        Блог apteka24.ua включає не тільки медичні теми, а й теми розважального характеру. У такому випадку інформація,
        що міститься в ненаукових статтях, носить лише ознайомлювальний характер, може не збігатися з думкою редакції і
        не має на меті образити читача з іншою точкою зору. Розважальна інформація не претендує на істинність і
        обґрунтованість і може бути лише одним з існуючих в світі думок та ідеологій.
      </Typography>
      <h3>Конфлікт інтересів</h3>
      <Typography>
        apteka24.ua співпрацює з медичними експертами — лікарями, психологами, фармацевтами та іншими представниками
        сфери здоров&apos;я і благополуччя. Така співпраця в деяких аспектах може мати на увазі конфлікт інтересів.
      </Typography>
      <Typography>
        Конфлікт інтересів може полягати в тому, що деякі фахівці (фармацевти) є співробітниками apteka24.ua і отримують
        грошову винагороду за свою роботу, що може позначатися на їх позиціонуванні і подачі інформації в контенті
        сайту.
      </Typography>

      <Typography>
        apteka24.ua не несе відповідальність за особисту думку і позиціонування кожного фахівця, проте намагається
        мінімізувати свідомо неправдоподібну або не корисну інформацію для відвідувачів Сайту, відмовляючись від
        публікацій подібних статей..
      </Typography>
      <Typography>
        Опублікований контент повинен бути корисним для здоров&apos;я і благополуччя читачів і не завдавати шкоди їх
        фізичному і ментальному здоров&apos;ю.
      </Typography>

      <Typography>
        Лікарі та інші фахівці з області здоров&apos;я і благополуччя співпрацюють з apteka24.ua на благодійних засадах
        і не отримують за свою діяльність фінансову винагороду, що не виключає, але значно знижує конфлікт інтересів.
      </Typography>
      <Typography>
        Якщо ви бачите на Сайті неправдоподібний, застарілий або помилковий контент, зверніться до редакції з
        повідомленням, і ми приймемо негайних заходів щодо усунення неточностей на Сайті.
      </Typography>
      <h3>Співпраця і зворотний зв&apos;язок</h3>
      <Typography>
        apteka24.ua пропонує співпрацю медичним експертам на правах реклами — фармацевтам та лікарям різних
        спеціалізацій. Експерти, які бажають співпрацювати, можуть стати частиною редакторської команди медичних
        експертів apteka24.ua.
      </Typography>
      <Typography>Діяльність медичних експертів включає три напрямки:</Typography>
      <List>
        <ListItem>
          вичитування, перевірка, внесення правок і схвалення текстів, написаних авторами редакції сайту;
        </ListItem>
        <ListItem>написання власних авторських матеріалів з їх подальшою публікацією на блозі сайту;</ListItem>
        <ListItem>інтерв&apos;ювання з найбільш актуальних і важливих питань для читачів сайту.</ListItem>
      </List>
      <Typography>
        Кожен вид діяльності при публікації супроводжується вказівкою медичного експерта в тілі статті з розміщенням
        його фотографії, ПІБ, спеціалізації, категорії, місця роботи і гіперпосилання на особистий профіль або профіль
        медичної клініки.
      </Typography>
      <Typography>
        Для домовленості про співпрацю необхідно написати на пошту головного редактора apteka24.ua Юлії Щербаченко —
        editor@apteka24.ua.
      </Typography>

      <Typography>
        Для отримання зворотного зв&apos;язку за матеріалами Сайту необхідно звернутися за вищевказаною поштовою
        адресою.
      </Typography>
      <h3>Відмова від відповідальності</h3>
      <Typography>
        У матеріалах, опублікованих на Сайті і що включають як інструкції, так і статті блогу, ми намагаємося
        відобразити найбільш достовірну інформацію, щоб максимально докладно і точно відповісти на питання відвідувачів.
        Ми робимо все можливе, щоб надавати науково доведені і надійні дані, проте ми не даємо жодних гарантій щодо
        нашого контенту і не несемо відповідальність за його подальше використання відвідувачами сайту.
      </Typography>

      <Typography>
        Пам&apos;ятайте, що інформація, опублікована на Сайті, не є керівництвом до дії і носить суто ознайомчий
        характер. Самолікування може бути небезпечним для вашого здоров&apos;я, і якщо ви наважуєтеся лікуватися без
        консультації лікаря, то це рішення на ваш страх і ризик.
      </Typography>
      <Typography>
        Інформація, яку ми надаємо на apteka24.ua, не призначена для заміни консультації з кваліфікованим медичним
        працівником — навіть найповніше інформування не є приводом для відміни відвідування лікаря. За всіма медичними
        питаннями для консультації, діагностування та призначення лікування необхідно звертатися до вашого лікаря.
      </Typography>

      <Typography>
        Наданий нами контент не призначений для використання в цілях діагностики або лікування. Повідомте свого лікаря
        про будь-які зміни в своєму самопочутті або про те, як ви збираєтеся змінити свій спосіб життя. Не нехтуйте
        медичними порадами і не відкладайте відвідування поліклініки через те, що ви прочитали на нашому сайті, в
        додатку або по інших каналах зв&apos;язку корисну для вас інформацію.
      </Typography>
      <Typography>
        Якщо у вас виникнуть питання або побоювання з приводу будь-яких захворювань, будь ласка, зверніться до свого
        лікаря. Сайт apteka24.ua може ознайомити вас з питаннями здоров&apos;я, захворювань і лікування, але він не
        замінить діагностику і консультацію фахівця.
      </Typography>

      <Typography>
        Редакція apteka24.ua не несе відповідальність за недоцільне використання інформації відвідувачами сайту.
      </Typography>
    </Wrapper>
  )
}
