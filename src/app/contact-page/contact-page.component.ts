import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommunicationService } from '../_services/communication.service';
import { QueueClient } from '@azure/storage-queue';
import { environment } from 'src/environments/environment';
import { EmailDTO } from '../_models/EmailDTO';
import { v4 as uuid } from 'uuid';
import { AnonymousCredential, BlobServiceClient, newPipeline, } from '@azure/storage-blob';

@Component({
	selector: 'app-contact-page',
	templateUrl: './contact-page.component.html',
	styleUrls: ['./contact-page.component.css'],
})

export class ContactPageComponent {

	constructor(private fb: FormBuilder)
	{
	}

	ngOnInit() {
		
	}

	
	async onSubmit() {

	 }

}
