
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

import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import '../less/creative.less';

export default class Index extends React.Component {
  
  render() {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">
                  Atech Environnement
                </a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a className="page-scroll" href="#societe">Société</a>
                  </li>
                  <li>
                    <a className="page-scroll" href="#services">Services</a>
                  </li>
                  <li>
                    <a className="page-scroll" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header>
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

          <section className="bg-primary" id="societe">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                  <h2 className="section-heading">
                    Société
                  </h2>
                  <hr className="light" />
                  <p className="text-faded">
                    Investigations des sols, gaz du sol et eaux souterrainnes dans des zones à accès difficile
                  </p>
                  <p className="text-faded">
                    Plus de 500 interventions, depuis 2014, de sondages environnementaux
                    dans le cadre de diagnostics de pollution des sols
                  </p>
                </div>
              </div>
            </div>
          </section>

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
                  <p>
                    <address>
                      5 Rue des Réservoirs
                      <br />
                      94340 Joinville Le Pont
                    </address>
                  </p>
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
                    <FormControl type="text" placeholder="Votre nom" />
                  </FormGroup>
                  <FormGroup bsSize="large">
                    <FormControl type="email" placeholder="Votre email" />
                  </FormGroup>
                  <FormGroup bsSize="large">
                    <FormControl type="tel" placeholder="Votre téléphone" />
                  </FormGroup>
                  <FormGroup bsSize="large">
                    <FormControl componentClass="textarea"
                                 placeholder="Votre message"
                                 rows={6} />
                  </FormGroup>
                  <p className="text-center">
                    <Button type="submit" bsStyle="primary" bsSize="large">
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
}