"use strict";

import React from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import classNames from 'classnames';
import smoothScroll from 'smooth-scroll';

import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import '../less/creative.less';

smoothScroll.init({
  speed: 500,
  easing: 'easeInOutCubic',
  offset: 50,
  updateURL: false
});

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

  handleScrollLinkClick(event, key) {
    event.preventDefault();
    smoothScroll.animateScroll('#' + key);
  }

  renderScrollLink(key, label) {
    return (
      <li className={classNames({ active: this.state.activeSection === key })} key={key}>
        <a className="page-scroll" href={'#' + key} onClick={e => this.handleScrollLinkClick(e, key)}>
          {label}
        </a>
      </li>
    );
  }

  renderSectionLimit({ above, below }) {
    return (
      <Waypoint
        onEnter={({ previousPosition }) => {
          if (previousPosition === Waypoint.above) {
            this.setState({ activeSection: above });
          }
        }}
        onLeave={({ currentPosition }) => {
          if (currentPosition === Waypoint.above) {
            this.setState({ activeSection: below });
          }
        }}
        topOffset="80px"
      />
    );
  }
  
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <nav id="mainNav" className={classNames({
            'navbar': true,
            'navbar-default': true,
            'navbar-fixed-top': true,
            'affix': this.state.activeSection != 'page-top'
          })}>
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll"
                   href="#page-top"
                   onClick={e => this.handleScrollLinkClick(e, 'page-top')}>
                  Atech Environnement
                </a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
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
                  Prestations d'investigation des sols au carottier battu portatif
                </p>
              </div>
            </div>
          </header>

          {this.renderSectionLimit({ above: 'page-top', below: 'societe' })}

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

          {this.renderSectionLimit({ above: 'societe', below: 'services' })}

          <section id="services">
            <div className="container container-small">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Services</h2>
                  <hr className="primary" />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h3>Avantages de la technique</h3>
                  <ul>
                    <li>Contraintes d’accès très limités, L1m x l1m x H1.90m</li>
                    <li>Impact sur la zone d’intervention pendant et après chantier minime</li>
                    <li>Machines électriques (intervention en espace confiné)</li>
                    <li>Matériaux non remaniés pour un relevé lithologique précis</li>
                  </ul>
                  <h3>Limites techniques</h3>
                  <ul>
                    <li>Investigations jusqu’à 8 m de profondeur en fonction de la géologie</li>
                    <li>Diamètre de forage de Ø40mm à Ø80mm maximum</li>
                  </ul>
                  <h3>Politique qualité securité</h3>
                  <ul>
                    <li>
                      Possibilité de mise à disposition d’un détecteur de réseaux et d’un explosimètre
                    </li>
                    <li>
                      Intervenants ayant suivit les formations Sauveteur Secouriste
                      du Travail et Risque Chimique Niveau 2
                    </li>
                    <li>
                      Sensibilisation aux risques liés à l’activité et notament aux gestes et postures.
                      Recherche continue d’amélioration du poste de travail et de réduction des temps d’expositions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {this.renderSectionLimit({ above: 'services', below: 'contact' })}

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
                <Col md={4} mdOffset={2}>
                  <address>
                    5 Rue des Réservoirs
                    <br />
                    94340 Joinville Le Pont
                  </address>
                  <p>
                    <i className="fa fa-envelope-o"></i>
                    &nbsp;
                    <a href="mailto:monadresse@exemple.com">
                      monadresse@exemple.com
                    </a>
                  </p>
                  <p>
                    <i className="fa fa-phone sr-contact"></i>
                    &nbsp;
                    06.12.34.56.78
                  </p>
                </Col>
                <Col md={6}>
                  <FormGroup bsSize="large">
                    <FormControl type="text"
                                 placeholder="Votre nom"
                                 value={this.state.contactForm.name}
                                 onChange={this.handleContactFormChange('name')} />
                  </FormGroup>
                  <FormGroup bsSize="large">
                    <FormControl type="email"
                                 placeholder="Votre email"
                                 value={this.state.contactForm.email}
                                 onChange={this.handleContactFormChange('email')} />
                  </FormGroup>
                  <FormGroup bsSize="large">
                    <FormControl type="tel"
                                 placeholder="Votre téléphone"
                                 value={this.state.contactForm.phone}
                                 onChange={this.handleContactFormChange('phone')} />
                  </FormGroup>
                  <FormGroup bsSize="large">
                    <FormControl type="text"
                                 placeholder="Votre société"
                                 value={this.state.contactForm.company}
                                 onChange={this.handleContactFormChange('company')} />
                  </FormGroup>
                  <FormGroup bsSize="large">
                    <FormControl componentClass="textarea"
                                 placeholder="Votre message"
                                 rows={6}
                                 value={this.state.contactForm.message}
                                 onChange={this.handleContactFormChange('message')} />
                  </FormGroup>
                  <p className="text-center">
                    <Button type="submit"
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.handleContactFormSubmit} >
                      Envoyer
                    </Button>
                  </p>
                </Col>
              </Row>
            </Grid>
          </section>
        </div>
      </DocumentTitle>
    );
  }

  handleContactFormSubmit = () => {
    const contact = this.state.contactForm;
    const formData = new FormData();
    Object.keys(contact).forEach(field => {
      formData.append(field, contact[field]);
    });
    fetch('https://hooks.zapier.com/hooks/catch/1573239/4f0mxe/', {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('Email sent');
      this.resetContactForm();
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