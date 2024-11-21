// Beispiel-Datenmodell für eine Party
class Party {
  constructor(title, description, location, images = [], videos = []) {
    this.title = title;
    this.description = description;
    this.location = location;
    this.images = images;
    this.videos = videos;
    this.participants = [];
  }

  addParticipant(user) {
    this.participants.push(user);
  }
}

module.exports = Party;