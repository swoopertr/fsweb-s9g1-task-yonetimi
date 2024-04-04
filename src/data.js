export const initialTeam = ["ömer", "emre"];

export const initialTasks = [
  {
    id: 1,
    title: "Projeyi baştan sona oku",
    description:
      "Bugün öğrendiklerimizden hangilerini projede kullanabiliriz, hangi kısımları mevcut bilgimizle yapabiliriz?",
    people: ["ömer", "emre"],
    deadline: "",
    status: "yapıldı",
  },
  {
    id: 2,
    title: "Projede neler yapmalıyız, bir liste çıkar",
    description:
      "Projede neler yapmamız gerekiyor? Aklımıza gelen her adımı yazalım.",
    people: ["ömer"],
    deadline: "",
    status: "yapıldı",
  },
  {
    id: 3,
    title: "Yapılacaklar listesini sıraya koy",
    description:
      "Hangi adımdan başlasak daha iyi olur? Yapılacakları doğru sıraya koymaya çalışmak da bize fikir verebilir.",
    people: ["emre"],
    deadline: "123123",
    status: "yapılacak",
  },
  {
    id: 4,
    title: "Yazmaya başla!",
    description:
      "Unutma, en iyi öğretmen tecrübedir. Çok takılmadığın sürece konu tekrarı yapma. Sadece takıldığın yerleri araştır.",
    people: ["ömer", "emre"],
    deadline: "",
    status: "yapılacak",
  }
];

const people_key = 'people';
const task_key = 'tasks';

export const DataUnit = {
  savePerson: (person) => {

    const storedPeople = JSON.parse(localStorage.getItem(people_key)) || [];
    localStorage.setItem(people_key, JSON.stringify([...storedPeople, person]));
    console.log("Kaydedildi canıms")
  },

  listPeople: () => {
    return JSON.parse(localStorage.getItem(people_key)) || [];
  },

  saveTask: (task) => {
    const storedTasks = JSON.parse(localStorage.getItem(task_key)) || [{id: 0}];
    let newId = Math.max(...storedTasks.map(item=>item.id)) + 1;
    if(newId ===1){
      localStorage.setItem(task_key, JSON.stringify([{...task, id: newId, status: "yapılacak" }]));
      return;
    }
    localStorage.setItem(task_key, JSON.stringify([...storedTasks, {...task, id: newId, status: "yapılacak"}]));
  },

  taskStateChange : (id)=>{
    const storedTasks = JSON.parse(localStorage.getItem(task_key)) || [];
    const updatedTasks = storedTasks.map(task => {
      if (task.id === id) {
        return {...task, status: task.status === "yapılacak" ? "yapıldı" :"yapılacak" }
      }
      return task;
    });
    localStorage.setItem(task_key, JSON.stringify(updatedTasks));
  },

  listUnfinishedTasks: () => {
    const storedTasks = JSON.parse(localStorage.getItem(task_key)) || [];
    return storedTasks.filter(task => task.status === 'yapılacak');
  },

  listFinishedTasks: () => {
    const storedTasks = JSON.parse(localStorage.getItem(task_key)) || [];
    return storedTasks.filter(task => task.status === 'yapıldı');
  },

  listAllTasks: () => {
    return JSON.parse(localStorage.getItem(task_key)) || [];
  }
};


