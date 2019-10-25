
// Note object to store state of each note
function Note(value, title, backgroundColor) {
    this.value = ko.observable(value);
    this.title = ko.observable(title);
    this.backgroundColor = ko.observable(backgroundColor);
}

// View model object
var ViewModel = function() {
    var self = this;
    self.colors = ["#FFBF00", "#9966CC", "#89CFF0", "#F5F5DC", "#0095B6", "#50C878"];

    // Create observables for bindings
    self.notes = ko.observableArray([]);
    self.selectedColor = ko.observable("#FFBF00");
    self.selectedNote = ko.observable();

    self.newNoteBtnClicked = function() {
        var newNote = new Note("","", self.selectedColor());
        self.notes.push(newNote);
        window.scrollTo(0,document.body.scrollHeight);
        self.selectedNote(newNote);
    }

    self.removeNote = function() {
        self.notes.remove(this);
    }

    self.selectColor = function() {
        self.selectedColor(this);
        if (self.selectedNote() != null) {
            self.selectedNote().backgroundColor(this.toString());
        }
    }

    self.noteClicked = function() {
        self.selectedNote(this);
        self.selectedColor(this.backgroundColor());
    }
}


window.onload = function() { ko.applyBindings(new ViewModel()); }

