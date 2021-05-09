import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';


export async function connectFireBase(){

    admin.initializeApp({
        credential: admin.credential.cert({
            clientEmail:"firebase-adminsdk-japw8@corporacionaquaperu.iam.gserviceaccount.com",
            privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZ5pdnxs5Z3eVE\nYnHoKHJ9qKB/DiVLdijFB4bHfql8FVsavGSZ1dO38rubFksKgxdrH+BEoczjgpUT\nutwOPX4nsdz02yc8TClt1K9OI70aL/OdOJOQh+PHG0u9jBH5jfnjD6OjD1zttX32\n0etw4ZLhXx3IiHrKM5zBFoHG+cFWrexpHEwOWde7kKDo8xpm/m3ppxNJgt1JNuTd\nCO6aIxRw3q2IohsHs0crZ+g9RERjMi41/EydbFG14cc5YVQfKje2CjWFL+d3aJXl\nos7fcKX/gt0+comQsia/XgCPxiEuh8lHwK7//GeF2KI1aSdNe5PNmYcHuwHcBRsh\nqOrAEW1xAgMBAAECgf9f3f6IFJdBHTF7SU6RFZwMpuoOUaHHrPS2xxXjtX36NRXK\nwtUSOxCMhVQK/OVuq1CTFw6RbKp+PWw6yxznfFEsRCn1a9eLGn0r5GoLnoL+7Swy\nFRa+3l/bf856hyjC4s9yxF90Hiac3HzCyIZivvQ4s5czH/1HeOF7c7e3gM88z67A\nIBszpWzUoAV6BR1eVjXGeKc7/KbTVDquHUJNh4Sn4Xpv+nliX2oF/P4y5nb93kKr\n5uNrNJgKmif4iuvGjhIflMggKaajVL5Mro7bVu6cYALUsoL/nx8posStI9OZRA6/\nF48vhG4dqE6z/+DllKrNCfnI0sQxrUTncGZZ9wECgYEA/2z4xK14WbB/TScRwIVB\n8ZCimWyuEZFmWzGpR3Nn9tkB2laN/Z4hgrPyDgpZZtUGDIiOpcB+HKZXWhpK+BVN\npUiGenTDm+/+SR4fV22vx6eq+zH/NmqwPmjPohF4uE8qIsi5VFfr9DWQpP2iKzZz\nGFABJMjxK8+UZE/DS9CwwjECgYEA2mQFAf6Le5tPdxS4a6ReqGoxeWwcn+ByORGM\n3uP/rr8xE/QvpRkRGknmN0mlThf0adVSgu5cAjmal1Q2EwPT/eeN9UG918r+f4PL\nOYA4BtqmOWmScraoGQv3RPinIQEIcJhJMiQraHw25nQ0YsvEnBE+n9pRM8RE6LG2\nEJ+zT0ECgYEAodA5MO/sZHVp0EjF+D7zbcOBHs044SxJudAWO4ui+0Cy6c0XmuoI\ntLKmz7pCtOCTOnFwXRU7T48Zm504jT2BuQnfF8jM+wbpAw0wMcTtLQDNUuFzmtev\n23muwC9tWOXd/bdHoWUpt8YPYlbD27hc5bQZZWJfVq/khD/7qxYERKECgYEAoRkW\n+JmkmtG+lMEcKYteqC1twXwWwXj3yVFA8UqO2YD/2xBN9SPAkfvhbvdMkYbqLQfH\njf32sU181BSyruQsBShCd6C/QefkRHwb9Za3vZac980A0s4awh8pkB88agQxDZ3I\noMw9mR3IAcfGvPpDVj0CTTjmnaEyk9RD0Y983gECgYEAoZdWWYp3tunF52n5E0rU\neT8WeJwNKs1ysTa9scLWuZJHyVElhqD4AouXNTgmqlqjhhujucx3JXyYckFnHNsy\n9ZlY4soV9rwFChhExJy0PJEPQVR8MhwO4q1yRqimX1q9SsuWR3IzCmDuiFBvGIQo\n78vOOB2Hn4viz88RAbEg4v0=\n-----END PRIVATE KEY-----\n",
            projectId:"corporacionaquaperu" 
        }),
        databaseURL:"https://corporacionaquaperu.firebaseio.com",
      });
      const firestore = admin.firestore();
      fireorm.initialize(firestore);
    
 
}
