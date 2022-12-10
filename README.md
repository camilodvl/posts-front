# Integrantes:
# Camilo Andres Ramirez Muñoz
# Julian Ramirez Vasquez

# Video explicativo:
[Video explicativo](https://youtu.be/I44l6X-Gwx0).

# posts-front


# Script Base de datos

```sh

INSERT INTO vue_api_template.categories (name,description,created_at,updated_at) VALUES
	 ('Tecnologia','Temas tecnologicos','2022-12-03 20:39:44','2022-12-03 20:39:44'),
	 ('Deporte','Temas sobre deporte','2022-12-03 20:45:46','2022-12-03 20:45:46'),
	 ('Mascotas nuevo','Todo sobre tu mascota','2022-12-03 21:29:23','2022-12-04 19:26:09'),
	 ('Suplementos','Sumplementos categoria','2022-12-04 19:52:35','2022-12-04 19:52:35'),
	 ('Gimnasio','Productos para el gimnasio','2022-12-08 18:58:50','2022-12-08 23:47:10'),
	 ('Nueva categoria','Categoria nueva','2022-12-08 23:47:21','2022-12-08 23:47:21');


INSERT INTO vue_api_template.posts (category_id,name,description,state,created_at,updated_at) VALUES
	 (1,'Primer post','Primer post tecnologico','No Publicado','2022-12-04 15:27:29','2022-12-08 14:27:09'),
	 (7,'Segundo post','Primer post de mascotas','Publicado','2022-12-04 16:07:47','2022-12-08 18:33:13'),
	 (1,'test','otro test','Publicado','2022-12-08 14:22:47','2022-12-08 14:24:32'),
	 (7,'test 2','otro test 2','No Publicado','2022-12-08 14:23:00','2022-12-08 14:23:00'),
	 (2,'Nuevo post','12321','Publicado','2022-12-08 15:19:46','2022-12-08 15:19:46'),
	 (1,'12312','123123','Publicado','2022-12-08 15:20:19','2022-12-08 15:20:19'),
	 (8,'1111','2222','No Publicado','2022-12-08 15:23:17','2022-12-08 15:25:16'),
	 (2,'5555','555','Publicado','2022-12-08 18:33:24','2022-12-08 18:33:24'),
	 (7,'123','nueva descrp','Publicado','2022-12-08 18:48:51','2022-12-08 18:49:40'),
	 (7,'Nuevo post','Nuevo post','Publicado','2022-12-08 23:47:39','2022-12-08 23:47:39');


```
