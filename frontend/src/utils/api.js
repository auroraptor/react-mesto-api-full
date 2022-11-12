function Api({baseUrl, authorization}) {
  this.getResponseData = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  this.getCardList = () => {
    return fetch(`${baseUrl}cards`, {
      headers: {Cookies: authorization}
    })
    .then((res) => this.getResponseData(res));
  }

  this.postNewCard = (data) => {
    return fetch(`${baseUrl}cards`, {
      method: 'POST',
      headers: { authorization: authorization,
      'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => this.getResponseData(res));
  }

  this.getUserInfo = () => {
    return fetch(`${baseUrl}users/me`)
    .then((res) =>  this.getResponseData(res));
  }

  this.deleteCard = (card) => {
    return fetch(`${baseUrl}cards/${card['_id']}`, {
      method: 'DELETE',
      headers: {
        authorization: authorization
      }
    })
    .then((res) => this.getResponseData(res));
  }

  this.editUserInfo = (data) => {
    return fetch(`${baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: authorization,
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => this.getResponseData(res));
  }

  this.editUserAvatar = (avatar) => {
    return fetch(`${baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: authorization,
        'content-type': 'application/json'
      },
      body: JSON.stringify(avatar)
    })
    .then((res) => this.getResponseData(res));
  }

  this.like = (card, isLiked) => {
    return fetch(`${baseUrl}cards/${card._id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: authorization
      }
    })
    .then((res) => this.getResponseData(res));
  }

  this.register = (password, email) => {
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
    .then((res) => this.getResponseData(res));
  }

  this.login = (password, email) => {
    return fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
    .then((res) => this.getResponseData(res));
  }

  this.getContent = (jwt) => {
    return fetch(`${baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`
      }
    })
    .then((res) => this.getResponseData(res));
  }
}

const api = new Api({
  // baseUrl: 'http://api.auro.nomoredomains.icu/',
  baseUrl: 'http://localhost:3000',
  // baseUrl: 'https://auth.nomoreparties.co',
  // authorization: 'b5225d24-020a-49f6-8bcd-ca1813713eea'
});

export default api;


