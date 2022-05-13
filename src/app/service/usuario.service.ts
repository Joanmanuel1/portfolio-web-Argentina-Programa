import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuarioModel';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URI = 'http://localhost:8080';
  constructor(private http: HttpClient, private router:Router) { }
  
  user = { id: ""};

  listarUsuarios() {
		//return this.http.get(`${this.API_URI}/personas/traer`);
		return this.http.get(`http://localhost:8080/personas/traer`);
		
	}

  buscarUsuario(id: string) {
		//return this.http.get(`${this.API_URI}/personas/traer`);
		return this.http.get(`http://localhost:8080/personas/traerUno/${id}`);
		
	}

  registrar(usuario: any) {
		this.user = usuario;
		return this.http.post(`http://localhost:8080/personas/crear`, usuario);

	}


}