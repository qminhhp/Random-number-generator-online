export type Language =
  | "en" // English
  | "ko" // Korean
  | "es" // Spanish
  | "vi" // Vietnamese
  | "pt" // Portuguese
  | "mn" // Mongolian
  | "ne" // Nepali
  | "ru" // Russian
  | "de" // German
  | "ja" // Japanese
  | "zh" // Simplified Chinese
  | "id"; // Indonesian

export const languages = [
  { code: "en", name: "English" },
  { code: "ko", name: "한국어" },
  { code: "es", name: "Español" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "pt", name: "Português" },
  { code: "mn", name: "Монгол" },
  { code: "ne", name: "नेपाली" },
  { code: "ru", name: "Русский" },
  { code: "de", name: "Deutsch" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "简体中文" },
  { code: "id", name: "Indonesia" },
];

type TranslationKey =
  | "generateButton"
  | "copyButton"
  | "shareButton"
  | "minValue"
  | "maxValue"
  | "step"
  | "quickRanges"
  | "advancedOptions"
  | "configureSettings"
  | "numberCount"
  | "generateMultiple"
  | "numberFormat"
  | "decimal"
  | "hexadecimal"
  | "binary"
  | "history"
  | "previousResults"
  | "noHistory"
  | "clearHistory"
  | "prayerPrompt"
  | "receiveTeaching"
  | "prayingState"
  | "motherTeaching"
  | "godBlessYou";

type Translations = {
  [key in Language]: {
    [k in TranslationKey]: string;
  };
};

export const translations: Translations = {
  en: {
    generateButton: "Generate",
    copyButton: "Copy",
    shareButton: "Share",
    minValue: "Min Value",
    maxValue: "Max Value",
    step: "Step",
    quickRanges: "Quick Ranges",
    advancedOptions: "Advanced Options",
    configureSettings: "Configure additional settings",
    numberCount: "Number Count",
    generateMultiple: "Generate multiple numbers at once (max 100)",
    numberFormat: "Number Format",
    decimal: "Decimal",
    hexadecimal: "Hexadecimal",
    binary: "Binary",
    history: "History",
    previousResults: "previous results",
    noHistory: "No history yet",
    clearHistory: "Clear History",
    prayerPrompt:
      "Please pray to God and then click the button to receive today's practical teaching",
    receiveTeaching: "Receive Today's Teaching",
    prayingState: "Praying...",
    motherTeaching: "Mother's Teaching No.",
    godBlessYou:
      "Thank you. Today, please practice Mother's Teaching No. {0} well. God bless you.",
  },
  ko: {
    generateButton: "생성",
    copyButton: "복사",
    shareButton: "공유",
    minValue: "최소값",
    maxValue: "최대값",
    step: "단계",
    quickRanges: "빠른 범위",
    advancedOptions: "고급 옵션",
    configureSettings: "추가 설정 구성",
    numberCount: "숫자 개수",
    generateMultiple: "한 번에 여러 숫자 생성 (최대 100개)",
    numberFormat: "숫자 형식",
    decimal: "십진수",
    hexadecimal: "16진수",
    binary: "이진수",
    history: "기록",
    previousResults: "이전 결과",
    noHistory: "아직 기록이 없습니다",
    clearHistory: "기록 지우기",
    prayerPrompt:
      "하나님께 기도한 후 버튼을 클릭하여 오늘의 실천 교훈을 받으세요",
    receiveTeaching: "오늘의 교훈 받기",
    prayingState: "기도 중...",
    motherTeaching: "어머니의 교훈 번호",
    godBlessYou:
      "감사합니다. 오늘은 어머니의 교훈 {0}번을 잘 실천하세요. 하나님의 축복이 함께하길 바랍니다.",
  },
  es: {
    generateButton: "Generar",
    copyButton: "Copiar",
    shareButton: "Compartir",
    minValue: "Valor Mínimo",
    maxValue: "Valor Máximo",
    step: "Paso",
    quickRanges: "Rangos Rápidos",
    advancedOptions: "Opciones Avanzadas",
    configureSettings: "Configurar ajustes adicionales",
    numberCount: "Cantidad de Números",
    generateMultiple: "Generar múltiples números a la vez (máx. 100)",
    numberFormat: "Formato de Número",
    decimal: "Decimal",
    hexadecimal: "Hexadecimal",
    binary: "Binario",
    history: "Historial",
    previousResults: "resultados anteriores",
    noHistory: "Aún no hay historial",
    clearHistory: "Borrar Historial",
    prayerPrompt:
      "Por favor, ore a Dios y luego haga clic en el botón para recibir la enseñanza práctica de hoy",
    receiveTeaching: "Recibir Enseñanza de Hoy",
    prayingState: "Orando...",
    motherTeaching: "Enseñanza de la Madre No.",
    godBlessYou:
      "Gracias. Hoy, por favor practique bien la Enseñanza de la Madre No. {0}. Dios le bendiga.",
  },
  vi: {
    generateButton: "Tạo",
    copyButton: "Sao chép",
    shareButton: "Chia sẻ",
    minValue: "Giá trị nhỏ nhất",
    maxValue: "Giá trị lớn nhất",
    step: "Bước",
    quickRanges: "Phạm vi nhanh",
    advancedOptions: "Tùy chọn nâng cao",
    configureSettings: "Cấu hình cài đặt bổ sung",
    numberCount: "Số lượng",
    generateMultiple: "Tạo nhiều số cùng một lúc (tối đa 100)",
    numberFormat: "Định dạng số",
    decimal: "Thập phân",
    hexadecimal: "Thập lục phân",
    binary: "Nhị phân",
    history: "Lịch sử",
    previousResults: "kết quả trước",
    noHistory: "Chưa có lịch sử",
    clearHistory: "Xóa lịch sử",
    prayerPrompt:
      "Xin cầu nguyện Đức Chúa Trời rồi bấm nút để chọn giáo huấn thực tiễn hôm nay",
    receiveTeaching: "Nhận Giáo Huấn Hôm Nay",
    prayingState: "Đang cầu nguyện...",
    motherTeaching: "Giáo Huấn của Mẹ Số",
    godBlessYou:
      "Xin cảm ơn, ngày hôm nay anh chị em hãy thực tiễn tốt giáo huấn {0} của Mẹ nhé. Chúa ban phước cho bạn.",
  },
  pt: {
    generateButton: "Gerar",
    copyButton: "Copiar",
    shareButton: "Compartilhar",
    minValue: "Valor Mínimo",
    maxValue: "Valor Máximo",
    step: "Passo",
    quickRanges: "Intervalos Rápidos",
    advancedOptions: "Opções Avançadas",
    configureSettings: "Configurar definições adicionais",
    numberCount: "Quantidade de Números",
    generateMultiple: "Gerar múltiplos números de uma vez (máx. 100)",
    numberFormat: "Formato do Número",
    decimal: "Decimal",
    hexadecimal: "Hexadecimal",
    binary: "Binário",
    history: "Histórico",
    previousResults: "resultados anteriores",
    noHistory: "Ainda não há histórico",
    clearHistory: "Limpar Histórico",
    prayerPrompt:
      "Por favor, ore a Deus e depois clique no botão para receber o ensinamento prático de hoje",
    receiveTeaching: "Receber Ensinamento de Hoje",
    prayingState: "Orando...",
    motherTeaching: "Ensinamento da Mãe Nº",
    godBlessYou:
      "Obrigado. Hoje, por favor, pratique bem o Ensinamento da Mãe Nº {0}. Deus te abençoe.",
  },
  mn: {
    generateButton: "Үүсгэх",
    copyButton: "Хуулах",
    shareButton: "Хуваалцах",
    minValue: "Хамгийн бага утга",
    maxValue: "Хамгийн их утга",
    step: "Алхам",
    quickRanges: "Хурдан хязгаарууд",
    advancedOptions: "Дэвшилтэт сонголтууд",
    configureSettings: "Нэмэлт тохиргоог тохируулах",
    numberCount: "Тоо хэмжээ",
    generateMultiple: "Олон тоог нэг дор үүсгэх (хамгийн ихдээ 100)",
    numberFormat: "Тооны формат",
    decimal: "Аравтын",
    hexadecimal: "Арван зургаатын",
    binary: "Хоёртын",
    history: "Түүх",
    previousResults: "өмнөх үр дүнгүүд",
    noHistory: "Одоогоор түүх байхгүй",
    clearHistory: "Түүхийг арилгах",
    prayerPrompt:
      "Бурханд залбирч, дараа нь өнөөдрийн практик сургаалыг хүлээн авахын тулд товчлуур дээр дарна уу",
    receiveTeaching: "Өнөөдрийн Сургаалыг Хүлээн Авах",
    prayingState: "Залбирч байна...",
    motherTeaching: "Ээжийн Сургаал №",
    godBlessYou:
      "Баярлалаа. Өнөөдөр Ээжийн {0}-р Сургаалыг сайн дагаж мөрдөөрэй. Бурхан таныг ерөөх болтугай.",
  },
  ne: {
    generateButton: "उत्पन्न गर्नुहोस्",
    copyButton: "प्रतिलिपि",
    shareButton: "साझा गर्नुहोस्",
    minValue: "न्यूनतम मान",
    maxValue: "अधिकतम मान",
    step: "चरण",
    quickRanges: "द्रुत दायराहरू",
    advancedOptions: "उन्नत विकल्पहरू",
    configureSettings: "अतिरिक्त सेटिङहरू कन्फिगर गर्नुहोस्",
    numberCount: "संख्या गणना",
    generateMultiple: "एकै पटकमा धेरै संख्याहरू उत्पन्न गर्नुहोस् (अधिकतम 100)",
    numberFormat: "संख्या ढाँचा",
    decimal: "दशमलव",
    hexadecimal: "हेक्साडेसिमल",
    binary: "बाइनरी",
    history: "इतिहास",
    previousResults: "पहिलेका परिणामहरू",
    noHistory: "अहिलेसम्म इतिहास छैन",
    clearHistory: "इतिहास खाली गर्नुहोस्",
    prayerPrompt:
      "कृपया परमेश्वरलाई प्रार्थना गर्नुहोस् र त्यसपछि आजको व्यावहारिक शिक्षा प्राप्त गर्न बटनमा क्लिक गर्नुहोस्",
    receiveTeaching: "आजको शिक्षा प्राप्त गर्नुहोस्",
    prayingState: "प्रार्थना गर्दै...",
    motherTeaching: "आमाको शिक्षा नं.",
    godBlessYou:
      "धन्यवाद। आज, कृपया आमाको शिक्षा नं. {0} राम्रोसँग अभ्यास गर्नुहोस्। परमेश्वरले तपाईंलाई आशीर्वाद दिनुभएको होस्।",
  },
  ru: {
    generateButton: "Создать",
    copyButton: "Копировать",
    shareButton: "Поделиться",
    minValue: "Мин. значение",
    maxValue: "Макс. значение",
    step: "Шаг",
    quickRanges: "Быстрые диапазоны",
    advancedOptions: "Расширенные настройки",
    configureSettings: "Настроить дополнительные параметры",
    numberCount: "Количество чисел",
    generateMultiple: "Генерировать несколько чисел за раз (макс. 100)",
    numberFormat: "Формат числа",
    decimal: "Десятичный",
    hexadecimal: "Шестнадцатеричный",
    binary: "Двоичный",
    history: "История",
    previousResults: "предыдущих результатов",
    noHistory: "Пока нет истории",
    clearHistory: "Очистить историю",
    prayerPrompt:
      "Пожалуйста, помолитесь Богу, а затем нажмите кнопку, чтобы получить сегодняшнее практическое учение",
    receiveTeaching: "Получить сегодняшнее учение",
    prayingState: "Молимся...",
    motherTeaching: "Учение Матери №",
    godBlessYou:
      "Спасибо. Сегодня, пожалуйста, хорошо практикуйте Учение Матери № {0}. Да благословит вас Бог.",
  },
  de: {
    generateButton: "Generieren",
    copyButton: "Kopieren",
    shareButton: "Teilen",
    minValue: "Mindestwert",
    maxValue: "Höchstwert",
    step: "Schritt",
    quickRanges: "Schnellbereiche",
    advancedOptions: "Erweiterte Optionen",
    configureSettings: "Zusätzliche Einstellungen konfigurieren",
    numberCount: "Anzahl der Zahlen",
    generateMultiple: "Mehrere Zahlen auf einmal generieren (max. 100)",
    numberFormat: "Zahlenformat",
    decimal: "Dezimal",
    hexadecimal: "Hexadezimal",
    binary: "Binär",
    history: "Verlauf",
    previousResults: "vorherige Ergebnisse",
    noHistory: "Noch kein Verlauf",
    clearHistory: "Verlauf löschen",
    prayerPrompt:
      "Bitte beten Sie zu Gott und klicken Sie dann auf die Schaltfläche, um die heutige praktische Lehre zu erhalten",
    receiveTeaching: "Heutige Lehre erhalten",
    prayingState: "Beten...",
    motherTeaching: "Lehre der Mutter Nr.",
    godBlessYou:
      "Vielen Dank. Bitte praktizieren Sie heute die Lehre der Mutter Nr. {0} gut. Gott segne Sie.",
  },
  ja: {
    generateButton: "生成",
    copyButton: "コピー",
    shareButton: "共有",
    minValue: "最小値",
    maxValue: "最大値",
    step: "ステップ",
    quickRanges: "クイック範囲",
    advancedOptions: "詳細オプション",
    configureSettings: "追加設定を構成する",
    numberCount: "数字の数",
    generateMultiple: "一度に複数の数字を生成（最大100）",
    numberFormat: "数字形式",
    decimal: "10進数",
    hexadecimal: "16進数",
    binary: "2進数",
    history: "履歴",
    previousResults: "以前の結果",
    noHistory: "まだ履歴がありません",
    clearHistory: "履歴をクリア",
    prayerPrompt:
      "神様に祈り、ボタンをクリックして今日の実践的な教えを受け取ってください",
    receiveTeaching: "今日の教えを受け取る",
    prayingState: "祈っています...",
    motherTeaching: "母の教え No.",
    godBlessYou:
      "ありがとうございます。今日は母の教え No.{0} をよく実践してください。神の祝福がありますように。",
  },
  zh: {
    generateButton: "生成",
    copyButton: "复制",
    shareButton: "分享",
    minValue: "最小值",
    maxValue: "最大值",
    step: "步长",
    quickRanges: "快速范围",
    advancedOptions: "高级选项",
    configureSettings: "配置附加设置",
    numberCount: "数字数量",
    generateMultiple: "一次生成多个数字（最多100个）",
    numberFormat: "数字格式",
    decimal: "十进制",
    hexadecimal: "十六进制",
    binary: "二进制",
    history: "历史记录",
    previousResults: "之前的结果",
    noHistory: "暂无历史记录",
    clearHistory: "清除历史记录",
    prayerPrompt: "请向上帝祷告，然后点击按钮接收今天的实践教导",
    receiveTeaching: "接收今日教导",
    prayingState: "祷告中...",
    motherTeaching: "母亲的教导 No.",
    godBlessYou: "谢谢。今天，请好好实践母亲的教导 No.{0}。愿上帝保佑你。",
  },
  id: {
    generateButton: "Hasilkan",
    copyButton: "Salin",
    shareButton: "Bagikan",
    minValue: "Nilai Minimum",
    maxValue: "Nilai Maksimum",
    step: "Langkah",
    quickRanges: "Rentang Cepat",
    advancedOptions: "Opsi Lanjutan",
    configureSettings: "Konfigurasi pengaturan tambahan",
    numberCount: "Jumlah Angka",
    generateMultiple: "Hasilkan beberapa angka sekaligus (maks 100)",
    numberFormat: "Format Angka",
    decimal: "Desimal",
    hexadecimal: "Heksadesimal",
    binary: "Biner",
    history: "Riwayat",
    previousResults: "hasil sebelumnya",
    noHistory: "Belum ada riwayat",
    clearHistory: "Hapus Riwayat",
    prayerPrompt:
      "Silakan berdoa kepada Tuhan dan kemudian klik tombol untuk menerima ajaran praktis hari ini",
    receiveTeaching: "Terima Ajaran Hari Ini",
    prayingState: "Berdoa...",
    motherTeaching: "Ajaran Ibu No.",
    godBlessYou:
      "Terima kasih. Hari ini, silakan praktikkan dengan baik Ajaran Ibu No. {0}. Tuhan memberkati Anda.",
  },
};

// Helper function to format strings with placeholders
export function formatString(str: string, ...args: any[]): string {
  return str.replace(/{(\d+)}/g, (match, index) => {
    return typeof args[index] !== "undefined" ? args[index] : match;
  });
}
