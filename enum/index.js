/*  简单枚举 */
{
    var CardSuit = void 0;
    (function (CardSuit) {
        CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
        CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
        CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
        CardSuit[CardSuit["Spades"] = 3] = "Spades";
    })(CardSuit || (CardSuit = {}));
    // 简单的使用枚举类型
    var Card = CardSuit.Clubs;
    // 类型安全
    Card = 'not a member of card suit'; // Error: string 不能赋值给 `CardSuit` 类型
}
/* 简单枚举结束 */
/*   字符串枚举开始  */
{
    var EvidenceTypeEnum = void 0;
    (function (EvidenceTypeEnum) {
        EvidenceTypeEnum["UNKNOWN"] = "";
        EvidenceTypeEnum["PASSPORT_VISA"] = "passport_visa";
        EvidenceTypeEnum["PASSPORT"] = "passport";
        EvidenceTypeEnum["SIGHTED_STUDENT_CARD"] = "sighted_tertiary_edu_id";
        EvidenceTypeEnum["SIGHTED_KEYPASS_CARD"] = "sighted_keypass_card";
        EvidenceTypeEnum["SIGHTED_PROOF_OF_AGE_CARD"] = "sighted_proof_of_age_card";
    })(EvidenceTypeEnum || (EvidenceTypeEnum = {}));
    var a = EvidenceTypeEnum.PASSPORT_VISA;
    console.log(a);
    // 字符串枚举更有实用意义
}
/*   字符串枚举结束  */
/**  常量枚举开始 */
{
    var lie = 0 /* False */;
    // 编译结束会变成 let lie = 0; 内联属于性能提升
}
/**  常量枚举结束 */
/**  有静态方法的枚举开始 */
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuseday"] = 1] = "Tuseday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
(function (Weekday) {
    function isBusinessDay(day) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
    Weekday.isBusinessDay = isBusinessDay;
})(Weekday || (Weekday = {}));
var mon = Weekday.Monday;
var sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun));
/**  有静态方法的枚举结束 */
