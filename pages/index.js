"use strict";

import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

import Grid from'react-bootstrap/lib/Grid';
import Row from'react-bootstrap/lib/Row';
import Col from'react-bootstrap/lib/Col';
import FormGroup from'react-bootstrap/lib/FormGroup';
import FormControl from'react-bootstrap/lib/FormControl';
import Button from'react-bootstrap/lib/Button';

import { Link } from 'react-scroll';

import classNames from 'classnames';

import toastr from 'toastr';

toastr.options = {
  positionClass: "toast-bottom-right"
};

import '../assets/main.less';
import 'toastr/toastr.less';

export default class Index extends React.Component {

  state = {
    activeSection: 'page-top',
    contactForm: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  };

  renderScrollLink(key, label) {
    return (
      <li className={classNames({ active: this.state.activeSection === key })} key={key}>
        <Link activeClass="active"
              to={key}
              href={`#${key}`}
              spy={true}
              smooth={true}
              offset={-50}
              onSetActive={this.activeSesionHandler(key)}>
          {label}
        </Link>
      </li>
    );
  }

  activeSesionHandler(key) {
    return () => {
      console.log('Set active: ' + key);
      return this.setState({ activeSection: key });
    };
  }
  
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <nav id="main-nav" className={classNames({
            'navbar': true,
            'navbar-default': true,
            'navbar-fixed-top': true,
            'affix': this.state.activeSection !== 'page-top'
          })}>
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand page-scroll"
                      to="page-top"
                      href="#page-top"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      onSetActive={this.activeSesionHandler('page-top')}>
                  Atech Environnement
                </Link>
              </div>

              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {[
                    this.renderScrollLink('societe', 'Société'),
                    this.renderScrollLink('services', 'Services'),
                    this.renderScrollLink('contact', 'Contact')
                  ]}
                </ul>
              </div>
            </div>
          </nav>

          <header id="page-top">
            <div className="header-content">
              <div className="header-content-inner">
                <h1 id="homeHeading">
                  Atech Environnement
                </h1>
                <p>
                  Prestation d'investigation des sols au carottier battu portatif
                </p>
              </div>
            </div>
          </header>

          <section className="bg-primary" id="societe">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                  <h2 className="section-heading">
                    Société
                  </h2>
                  <hr className="light" />
                  <p className="text-faded">
                    Investigations des sols, gaz du sol et eaux souterrainnes dans des zones à accès difficile.
                  </p>
                  <p className="text-faded">
                    Depuis 2014, plus de 500 interventions de sondages environnementaux
                    dans le cadre de diagnostics de pollution des sols.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="services">
            <div className="container container-small">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">
                    Services
                  </h2>
                  <hr className="primary" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <p className="text-center">
                    <a href={config.serviceFileUrl} className="btn btn-primary">
                      <i className="fa fa-download"></i>
                      &nbsp;
                      Liste des prestations
                    </a>
                  </p>
                  <h3 className="text-center">Avantages de la technique</h3>
                  <ul>
                    <li>Contraintes d’accès très limitées, L1m x l1m x H1.90m</li>
                    <li>Impact sur la zone d’intervention pendant et après chantier minime</li>
                    <li>Machines électriques (intervention en espace confiné) et également thermique</li>
                    <li>Matériaux non remaniés pour un relevé lithologique précis</li>
                  </ul>
                  <h3 className="text-center">Limites techniques</h3>
                  <ul>
                    <li>Investigations jusqu’à 8 m de profondeur en fonction de la géologie</li>
                    <li>Diamètre de forage de Ø40mm à Ø80mm maximum</li>
                  </ul>
                  <h3 className="text-center">Politique qualité securité</h3>
                  <ul>
                    <li>
                      Possibilité de mise à disposition d’un détecteur de réseaux et d’un explosimètre
                    </li>
                    <li>
                      Intervenants ayant suivit les formations Sauveteur Secouriste
                      du Travail et Risque Chimique Niveau 2
                    </li>
                    <li>
                      Sensibilisation aux risques liés à l’activité et notamment aux gestes et postures.
                      Recherche continue d’amélioration du poste de travail et de réduction des temps d’expositions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="bg-dark">
            <Grid>
              <Row>
                <Col lg={12} className="text-center">
                  <h2 className="section-heading">
                    Contactez-nous
                  </h2>
                  <hr className="light" />
                </Col>
              </Row>
              <Row>
                <Col md={4} mdOffset={2} sm={5}>
                  <div className="contact-infos">
                    <address>
                      12 Rue de l'Église
                      <br />
                      94340 Joinville-le-Pont
                    </address>
                    <p>
                      <i className="fa fa-envelope-o"></i>
                      &nbsp;
                      <a href={'mailto:' + config.contactEmail}>
                        {config.contactEmail}
                      </a>
                    </p>
                    <p>
                      <i className="fa fa-phone sr-contact"></i>
                      &nbsp;
                      {config.contactPhone}
                    </p>
                    <p className="social-links">
                      <a className="social-link" href="https://www.linkedin.com/company/atech-environnement" target="_blank">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a className="social-link" href="https://www.facebook.com/ATECH-Environnement-235555656842322/" target="_blank">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </p>
                  </div>
                  <div className="contact-map"></div>
                </Col>
                <Col md={6} sm={7}>
                  <form name="contact" ref="contactForm" onSubmit={this.handleContactFormSubmit}>
                    <FormGroup bsSize="large">
                      <FormControl type="text"
                                   name="name"
                                   placeholder="Votre nom"
                                   required={true}
                                   value={this.state.contactForm.name}
                                   onChange={this.handleContactFormChange('name')} />
                    </FormGroup>
                    <FormGroup bsSize="large">
                      <FormControl type="email"
                                   name="email"
                                   placeholder="Votre email"
                                   required={true}
                                   value={this.state.contactForm.email}
                                   onChange={this.handleContactFormChange('email')} />
                    </FormGroup>
                    <FormGroup bsSize="large">
                      <FormControl type="tel"
                                   name="tel"
                                   placeholder="Votre téléphone"
                                   value={this.state.contactForm.phone}
                                   onChange={this.handleContactFormChange('phone')} />
                    </FormGroup>
                    <FormGroup bsSize="large">
                      <FormControl type="text"
                                   name="company"
                                   placeholder="Votre société"
                                   required={true}
                                   value={this.state.contactForm.company}
                                   onChange={this.handleContactFormChange('company')} />
                    </FormGroup>
                    <FormGroup bsSize="large">
                      <FormControl componentClass="textarea"
                                   name="message"
                                   placeholder="Votre message"
                                   required={true}
                                   rows={6}
                                   value={this.state.contactForm.message}
                                   onChange={this.handleContactFormChange('message')} />
                    </FormGroup>
                    <p className="text-center">
                      <Button type="submit"
                              bsStyle="primary"
                              bsSize="large">
                        Envoyer
                      </Button>
                    </p>
                  </form>
                </Col>
              </Row>
            </Grid>
          </section>
        </div>
      </DocumentTitle>
    );
  }

  handleContactFormSubmit = e => {
    e.preventDefault();

    const contact = this.state.contactForm;
    const formData = new FormData();
    
    const form = this.refs.contactForm;
    for (let i = 0; i < form.elements.length; i++) {
      if (!form.elements[i].validity.valid) {
        return false;
      }
    }

    Object.keys(contact).forEach(field => {
      formData.append(field, contact[field]);
    });
    formData.append('_replyto', contact.email);
    formData.append('_subject', '[Contact] Message de ' + contact.name);
    fetch(config.mailthisUrl, {
      method: 'POST',
      body: formData
    }).then(() => {
      toastr.success('Votre message a bien été envoyé&nbsp;!');
      setTimeout(() => this.resetContactForm(), 1);
    });
  };

  handleContactFormChange(field) {
    return e => this.setState({
      contactForm: {
        ...this.state.contactForm,
        [field]: e.target.value
      }
    });
  }

  resetContactForm() {
    this.setState({
      contactForm: {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      }
    })
  }
}