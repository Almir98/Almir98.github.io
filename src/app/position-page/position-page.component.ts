import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttachmentDTO } from '../_models/AttachmentDTO';
import { EmailDTO } from '../_models/EmailDTO';
import { v4 as uuid } from 'uuid';
import { AnonymousCredential, newPipeline, QueueClient } from '@azure/storage-queue';
import { BlobServiceClient } from '@azure/storage-blob';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Position, PositionData } from '../_models/PositionData';
import { TranslateService } from '@ngx-translate/core';
import { eng } from 'src/assets/i18n/eng';
import { de } from 'src/assets/i18n/de';
import { bih } from 'src/assets/i18n/bih';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.css']
})
export class PositionPageComponent implements OnInit {

  queueClient: QueueClient;
  attachmentArray: File[];
  applyForm: FormGroup;
  emailSent: boolean = false;
  emailFailed: boolean = false;
  emailDTO: EmailDTO = new EmailDTO();
  generalPosition : boolean = false;
  
  position: Position | undefined;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private translationService: TranslateService) { }

  ngOnInit() {
    

	if(localStorage.getItem('language') === 'en')
    {
		this.translationService.setTranslation('en', eng, true);
		this.translationService.use('en');

    }
	else if(localStorage.getItem('language') === 'de')
	{
		this.translationService.setTranslation('de', de, true);
		this.translationService.use('de');
	}
    else
    {
		this.translationService.setTranslation('bih', bih, true);
		this.translationService.use('bih');
    }
  }


  async sendApplyForm(){

  }

	
}