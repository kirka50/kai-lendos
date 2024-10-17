interface TabsFormProps {
    tabsFormContent: Tab[];
}

interface Tab {
    title: string;
    subTitle: string;
    tabContent: TabContent;
}

interface TabContent {
    tabContentTitle: string;
    tabContentText: string;
}