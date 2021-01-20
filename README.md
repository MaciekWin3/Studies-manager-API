# Studies-Manager-API

Projekt na zaliczenie przedmiotu Programowanie aplikacji mobilnych

## Opis projektu

Proste REST APi, które ułatwi zarządzanie projektami, spotkaniami, egzaminami oraz zapewni prosty i szybki dostęp do planu zajęć.
Aplikacja korzysta z Expressa

## Endpoints

```javascript

//Classes

router.get("/", ClassesController.timetable);

router.post("/", ClassesController.classNew);

router.get("/searchbyname/:name", ClassesController.classSearchByName);

router.get("/:name", ClassesController.classSearchById);

router.patch("/updatestatus/:id", ClassesController.classUpdateStatus);

router.delete("/:id", ClassesController.classDelete);

router.patch("/:id", ClassesController.classUpdate);

//Exams

router.get("/", checkAuth, ExamsController.examsAll);

router.post("/", ExamsController.examNew);

router.get("/searchbyname/:name", ExamsController.examSearchByName);

router.get("/:id", ExamsController.examSearchById);

router.patch("/updatestatus/:id", ExamsController.examUpdateStatus);

router.delete("/:id", ExamsController.examDelete);

router.patch("/:id", ExamsController.examUpdate);

//Projects

router.get("/", MeetingsController.meetings);

router.post("/", MeetingsController.meetingNew);

router.get("/:projectId", MeetingsController.meetingProjects);

router.get("/:id", MeetingsController.meetingSearchById);

router.delete("/:id", MeetingsController.meetingDelete);

router.patch("/:id", MeetingsController.meetingUpdate);

//Exams

router.get("/", MeetingsController.meetings);

router.post("/", MeetingsController.meetingNew);

router.get("/:projectId", MeetingsController.meetingProjects);

router.get("/:id", MeetingsController.meetingSearchById);

router.delete("/:id", MeetingsController.meetingDelete);

router.patch("/:id", MeetingsController.meetingUpdate);

```

## Twórcy
Maciej Winnik & Piotr Kiedrowski s22-32