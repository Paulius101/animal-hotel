// src/app/data/services-data.ts

export interface Service {
    id: number;
    iconId: string;
    pId: string;
    icon: string;
    imgId: string;
    classNameP: string;
    classNameImg: string;
    title: string;
    description: string;
}

export const servicesData: Service[] = [
    {
        id: 1,
        iconId: "first",
        pId: "firstP",
        icon: "assets/minus.svg",
        imgId: "firstImg",
        classNameP: "",
        classNameImg: "",
        title: "Gyvūnų viešbutis",
        description: `Gyvūnų viešbučio Tiukelis patalpose yra atskiros zonos, skirtos šunims, katėms bei kitiems smulkiems gyvūnams. Visiems augintiniams yra skiriami individualūs šildomi kambariai...`,
    },
    {
        id: 2,
        iconId: "second",
        pId: "secondP",
        icon: "assets/plus.svg",
        imgId: "secondImg",
        classNameP: "hidden",
        classNameImg: "hidden",
        title: "SPA",
        description: `Mūsų SPA tikslas yra pratinti Jūsų augintinį prie to, kad visos higienos procedūros yra ne gąsdinančios, o atvirkščiai...`,
    },
    {
        id: 3,
        iconId: "third",
        pId: "thirdP",
        icon: "assets/plus.svg",
        imgId: "thirdImg",
        classNameP: "hidden",
        classNameImg: "hidden",
        title: "Dresūra",
        description: `Tiukelio gyvūnų SPA procedūros tinka ir ilgaplaukiams, ir trumpaplaukiams augintiniams...`,
    },
];
